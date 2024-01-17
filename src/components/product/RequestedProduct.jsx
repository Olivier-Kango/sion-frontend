// imports from React
import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
} from 'react';

// imports dependancies from Redux
import { useDispatch, useSelector } from 'react-redux';

// imports icons for react-icons library
import { LuSendHorizonal } from 'react-icons/lu';
import { FaUndo, FaTrash, FaReact } from 'react-icons/fa';
import { MdMoreVert } from 'react-icons/md';

// import actoins for requested products
import {
  getAllRequestedProducts,
  incrementRequestCount,
  resetRequestCount,
  addRequestedProducts,
  deleteRequestedProduct,
} from '../../redux/products/requested_products';

// importation of the styling from Requested Products
import './RequestedProduct.scss';

// Functional component for managing requested products
const RequestedProduct = () => {
  // Ref for scrolling to bottom after adding requested product
  const requestedProductsRef = useRef();

  // Redux state for requested products
  const requestedProducts = useSelector((state) => state.requestedProducts.requestedProducts);

  // local states
  const [openPopupId, setOpenPopupId] = useState(null);
  const [localRequestCount, setLocalRequestCount] = useState(0);
  const [highlightedProductId, setHighlightedProductId] = useState(null);
  const [loading, setLoading] = useState(true);

  // Memoize the sorted and mapped requested products
  const sortedAndMappedProducts = useMemo(() => (requestedProducts
    ? requestedProducts
      .slice() // create a copy to avoid mutating the original array
      .sort((a, b) => b.request_count - a.request_count)
      .map((product) => ({
        id: product.id,
        name: product.name,
        request_count: product.request_count,
      }))
    : []), [requestedProducts]);

  const dispatch = useDispatch();

  // Fetch all requested products on component mount
  useEffect(() => {
    setLoading(true); // Commence en état de chargement

    dispatch(getAllRequestedProducts())
      .then((action) => {
        if (action.type === 'GET_ALL_REQUESTED_PRODUCTS/fulfilled') {
          // La requête a réussi, donc on met loading à false
          setLoading(false);
        }
      })
      .catch((error) => {
        // La requête a échoué, donc on met loading à true
        console.error('Error loading data:', error);
        setLoading(true);
      });
  }, [dispatch]);

  // Toggle the visibility of the popup for a specific product
  const handleTogglePopup = (productId) => {
    setOpenPopupId((prevId) => (prevId === productId ? null : productId));
  };

  // Increment the request count for a specific product
  const handleIncrementRequest = (productId, currentRequestCount) => {
    // Update the local count immediately for a smooth user experience
    setLocalRequestCount((prevCounts) => ({ ...prevCounts, [productId]: currentRequestCount + 1 }));

    const updatedRequestedProductData = {
      request_count: currentRequestCount + 1,
    };

    dispatch(incrementRequestCount({ id: productId, updatedRequestedProductData }));

    // update class for smooth sorting
    setHighlightedProductId(productId);

    setTimeout(() => {
      setHighlightedProductId(null);
    }, 1000);
  };

  // Reset the request count for a specific product
  const handleResetRequest = (productId) => {
    const updatedRequestedProductData = {
      request_count: 0,
    };

    dispatch(resetRequestCount({ id: productId, updatedRequestedProductData }));
    requestedProductsRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  // Delete a requested product
  const handleDeleteRequestedProduct = (productId) => {
    dispatch(deleteRequestedProduct(productId));
  };

  // State for input fields
  const [name, setname] = useState('');
  const [requestCount] = useState(1);
  const [showButton, setShowButton] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = {
      name,
      request_count: requestCount,
    };

    // Dispatch the action to add requested products and handle the scroll to the bottom
    dispatch(addRequestedProducts(productData))
      .then((action) => {
        dispatch({
          type: 'ADD_REQUESTED_PRODUCT/fulfilled',
          payload: action.payload,
        });
        requestedProductsRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      });

    // Clear the input field after submission
    setname('');
  };

  // Update showButton state based on input field value
  useEffect(() => {
    setShowButton(name.length > 0);
  }, [name]);

  // Handle clicks outside of the popup to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.ellipsis')) {
        setOpenPopupId(null);
      }
    };

    document.addEventListener('click', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Render the component
  return (
    <div className="container">

      {/* Title */}
      <h1 className="title">Requested Products</h1>

      {loading && (
        <div className="loading-container">
          <FaReact className="loading-icon" />
          <p className="loading-message slide-in-out">Loading...</p>
        </div>
      )}
      {/* Product list */}
      <ul className="product-list">
        {sortedAndMappedProducts.map((product) => (
          <li
            key={product.id}
            className={`product-entry ${highlightedProductId === product.id ? 'highlighted' : ''}`}
          >
            <span>{product.name}</span>

            {/* Popup for reset and delete options */}
            <div className="popup" style={{ visibility: openPopupId === product.id ? 'visible' : 'hidden' }}>
              <svg aria-hidden="true" height="12" viewBox="0 0 25 12" width="25" className="x10l6tqk xng853d xu8u0ou" fill="white" style={{ transform: 'scale(1, -1) translate(0px, 0px) rotateY(180deg)' }}>
                <path d="M24.553.103c-2.791.32-5.922 1.53-7.78 3.455l-9.62 7.023c-2.45 2.54-5.78 1.645-5.78-2.487V2.085C1.373 1.191.846.422.1.102h24.453z" />
              </svg>

              {/* Buttons for reset and delete actions */}
              <div className="delete-reset">
                <button
                  type="button"
                  onClick={() => handleResetRequest(product.id)}
                >
                  <FaUndo className="icon" />
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteRequestedProduct(product.id)}
                >
                  <FaTrash className="icon" />
                </button>
              </div>
            </div>

            {/* 3 dots icon for reset and delete actions */}
            <MdMoreVert
              onClick={() => handleTogglePopup(product.id)}
              className="ellipsis"
            />

            {/* Button for incrementing request count */}
            <button
              type="button"
              onClick={() => handleIncrementRequest(product.id, product.request_count)}
              className="button-like"
            >
              <img className="icon" src="https://scontent.fkgl4-1.fna.fbcdn.net/m1/v/t6/An_Hu2MGghXfWhrGQLADBvMqHBUxBoVMkVyPd6nn5lnsrwR-vi4BbkvRAbUlxUY9vGSt_yQiOgk2XFidRDZtah01ve6N3Ln9ICuzKj0ZRWl7nKjEJUNFh5EMkRfQa4lMXQ.png?ccb=10-5&amp;oh=00_AfA29E8TGGwFzpSbPtpaDfTXHa_V0tMYVQ_HiZmf1QaAOA&amp;oe=65CE93EC&amp;_nc_sid=7da55a" alt="" style={{ height: '20px', width: '20px' }} />
              <span>{localRequestCount[product.id] || product.request_count}</span>
            </button>
          </li>
        ))}
      </ul>

      {/* Form for adding requested products */}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            value={name}
            required
            onChange={(e) => setname(e.target.value)}
            placeholder="Add the requested product... "
          />

          {/* Hidden input for request count */}
          <input
            type="number"
            id="unitPurchasePrice"
            value={requestCount}
            required
            inputMode="numeric"
            hidden
          />

          {/* Submit button for adding requested product */}
          {showButton
            && (
            <button type="submit">
              <LuSendHorizonal className="icon" />
            </button>
            )}
        </div>
      </form>
      <div id="to-bottom" ref={requestedProductsRef} />
    </div>
  );
};

export default RequestedProduct;
