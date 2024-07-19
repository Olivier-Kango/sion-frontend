import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LuSendHorizonal } from 'react-icons/lu';
import { FaUndo, FaTrash } from 'react-icons/fa';
import { MdMoreVert } from 'react-icons/md';
import { BiLoaderAlt } from 'react-icons/bi';
import {
  getAllRequestedProducts,
  incrementRequestCount,
  resetRequestCount,
  addRequestedProducts,
  deleteRequestedProduct,
} from '../../redux/products/requested_products';
import { userLogout } from '../../redux/users/users';
import like from '../../assets/like.png';
import './RequestedProduct.scss';

const RequestedProduct = () => {
  const requestedProductsRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const requestedProducts = useSelector((state) => state.requestedProducts.requestedProducts);
  const user = useSelector((state) => state.user.data);
  const filterName = useSelector((state) => state.products.searchQuery);

  const [openPopupId, setOpenPopupId] = useState(null);
  const [localRequestCount, setLocalRequestCount] = useState(0);
  const [localDeletedProducts, setLocalDeletedProducts] = useState([]);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [isBackend, setIsBackend] = useState(false);
  const [popupVisibleTimer, setPopupVisibleTimer] = useState(null);
  const [name, setname] = useState('');
  const [requestCount] = useState(1);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    dispatch(getAllRequestedProducts())
      .then((action) => {
        if (action.type === 'GET_ALL_REQUESTED_PRODUCTS/fulfilled') {
          setIsBackend(true);
        }
      })
      .catch(() => {
        setIsBackend(false);
      });
  }, [dispatch]);

  useEffect(() => {
    setShowButton(name.length > 0);
  }, [name]);

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

  const handleTogglePopup = (productId) => {
    setOpenPopupId((prevId) => (prevId === productId ? null : productId));

    clearTimeout(popupVisibleTimer);

    const timerId = setTimeout(() => {
      setOpenPopupId(null);
    }, 3000);

    setPopupVisibleTimer(timerId);
  };

  const handleIncrementRequest = (productId, currentRequestCount) => {
    setLocalRequestCount((prevCounts) => ({ ...prevCounts, [productId]: currentRequestCount + 1 }));

    const updatedRequestedProductData = {
      request_count: currentRequestCount + 1,
    };

    dispatch(incrementRequestCount({ id: productId, updatedRequestedProductData }));
  };

  const handleResetRequest = (productId) => {
    const updatedRequestedProductData = {
      request_count: 0,
    };

    setLocalRequestCount((prevCounts) => ({ ...prevCounts, [productId]: 0 }));

    dispatch(resetRequestCount({ id: productId, updatedRequestedProductData }));
    requestedProductsRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  const handleDeleteRequestedProduct = (productId) => {
    dispatch(deleteRequestedProduct(productId));
    setLocalDeletedProducts((prevDeletedProducts) => [...prevDeletedProducts, productId]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingSubmit(true);

    // eslint-disable-next-line max-len
    const existingProduct = requestedProducts.find((product) => product.name.toLowerCase() === name.toLowerCase());

    if (existingProduct) {
      const updatedRequestedProductData = {
        request_count: existingProduct.request_count + requestCount,
      };

      dispatch(incrementRequestCount({
        id: existingProduct.id,
        updatedRequestedProductData,
      }))
        .then(() => {
          setLoadingSubmit(false);
        });
    } else {
      const productData = {
        name,
        request_count: requestCount,
      };

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
          setLoadingSubmit(false);
        });
    }
    setname('');
  };

  const handleLogout = () => {
    dispatch(userLogout());
    navigate('/login-page');
  };

  return (
    <div className="container-requested">
      {user.role === 'admin' ? (
        <>

          <h1 className="title">
            Requested Products
            <div id="statusTag" className={isBackend ? 'green' : 'red'} />
          </h1>

          <ul className="product-list">
            {sortedAndMappedProducts
              .filter((product) => !localDeletedProducts.includes(product.id))
              .filter((product) => product.name.toLowerCase().includes(filterName.toLowerCase()))
              .map((product) => (
                <li
                  key={product.id}
                  className="product-entry"
                >
                  <span>{product.name}</span>

                  <div className={`popup ${openPopupId === product.id ? 'visible' : 'hidden'}`}>
                    <svg aria-hidden="true" height="12" viewBox="0 0 25 12" width="25" className="x10l6tqk xng853d xu8u0ou" fill="white" style={{ transform: 'scale(1, -1) translate(0px, 0px) rotateY(180deg)' }}>
                      <path d="M24.553.103c-2.791.32-5.922 1.53-7.78 3.455l-9.62 7.023c-2.45 2.54-5.78 1.645-5.78-2.487V2.085C1.373 1.191.846.422.1.102h24.453z" />
                    </svg>

                    <div className="delete-reset">
                      <button
                        type="button"
                        aria-label="Reset"
                        onClick={() => handleResetRequest(product.id)}
                      >
                        <FaUndo className="icon" />
                      </button>
                      <button
                        type="button"
                        aria-label="DeleteRequest"
                        onClick={() => handleDeleteRequestedProduct(product.id)}
                      >
                        <FaTrash className="icon" />
                      </button>
                    </div>
                  </div>

                  <div className="like">
                    <button
                      type="button"
                      aria-label="Like"
                      onClick={() => handleTogglePopup(product.id)}
                      className="ellipsis"
                    >
                      <MdMoreVert />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleIncrementRequest(product.id, product.request_count)}
                      className="button-like"
                    >
                      <img className="icon" src={like} alt="like_button" style={{ height: '20px', width: '20px' }} />
                      <span>{localRequestCount[product.id] || product.request_count}</span>
                    </button>
                  </div>
                </li>
              ))}
          </ul>

          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                id="name"
                value={name}
                required
                onChange={(e) => setname(e.target.value)}
                placeholder={loadingSubmit ? 'Adding...' : 'Add the requested product... '}
                disabled={loadingSubmit}
              />

              <input
                type="number"
                id="unitPurchasePrice"
                value={requestCount}
                required
                inputMode="numeric"
                hidden
              />

              {showButton && !loadingSubmit
                && (
                <button type="submit" aria-label="showButton">
                  <LuSendHorizonal className="icon" style={{ color: '#0a66c2' }} />
                </button>
                )}

              {loadingSubmit && (
                <BiLoaderAlt
                  className="loading-icon"
                  style={{
                    color: '#f08804',
                    animation: 'spin 1s linear infinite',
                    width: '1.5rem',
                    height: '1.5rem',
                    strokeWidth: '0.5px',
                  }}
                />
              )}
            </div>
          </form>
          <div id="to-bottom" ref={requestedProductsRef} />
        </>
      ) : (
        <div className="warning">
          <h1>Requested Products</h1>
          <p>
            To access the requested products information, you need to be an admin.
            <br />
            <br />
            Please,
            {' '}
            <span
              role="button"
              tabIndex={0}
              className="login-manager"
              onClick={handleLogout}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleLogout();
                }
              }}
            >
              click here
            </span>
            {' '}
            to log in.
          </p>
        </div>
      )}
    </div>
  );
};

export default RequestedProduct;
