import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LuSendHorizonal } from 'react-icons/lu';
import { FaUndo, FaTrash } from 'react-icons/fa';
import { MdMoreVert } from 'react-icons/md';
import {
  getAllRequestedProducts,
  incrementRequestCount,
  resetRequestCount,
  addRequestedProducts,
  deleteRequestedProduct,
} from '../../redux/products/requested_products';
import './RequestedProduct.scss';

const RequestedProduct = () => {
  const requestedProductsRef = useRef();
  const requestedProducts = useSelector((state) => state.requestedProducts.requestedProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRequestedProducts());
  }, [dispatch]);

  const [openPopupId, setOpenPopupId] = useState(null);

  const handleTogglePopup = (productId) => {
    setOpenPopupId((prevId) => (prevId === productId ? null : productId));
  };

  const handleIncrementRequest = (productId, currentRequestCount) => {
    const updatedRequestedProductData = {
      request_count: currentRequestCount + 1,
    };

    dispatch(incrementRequestCount({ id: productId, updatedRequestedProductData }));
  };

  const handleResetRequest = (productId) => {
    const updatedRequestedProductData = {
      request_count: 0,
    };

    dispatch(resetRequestCount({ id: productId, updatedRequestedProductData }));
  };

  const handleDeleteRequestedProduct = (productId) => {
    dispatch(deleteRequestedProduct(productId));
  };

  const [name, setname] = useState('');
  const [requestCount] = useState(1);
  const [showButton, setShowButton] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      });
    setname('');
  };

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

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="container">
      <h1 className="title">Requested Products</h1>
      <ul className="product-list">
        {requestedProducts && requestedProducts
          .sort((a, b) => b.request_count - a.request_count)
          .map((product) => (
            <li key={product.id} className="product-entry">
              <span>{product.name}</span>
              <div className="popup" style={{ visibility: openPopupId === product.id ? 'visible' : 'hidden' }}>
                <svg aria-hidden="true" height="12" viewBox="0 0 25 12" width="25" className="x10l6tqk xng853d xu8u0ou" fill="white" style={{ transform: 'scale(1, -1) translate(0px, 0px) rotateY(180deg)' }}>
                  <path d="M24.553.103c-2.791.32-5.922 1.53-7.78 3.455l-9.62 7.023c-2.45 2.54-5.78 1.645-5.78-2.487V2.085C1.373 1.191.846.422.1.102h24.453z" />
                </svg>
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
              {/* <FaEllipsisH onClick={() => togglePopup(product.id)} className="ellipsis" /> */}
              <MdMoreVert
                onClick={() => handleTogglePopup(product.id)}
                className="ellipsis"
              />
              <button
                type="button"
                onClick={() => handleIncrementRequest(product.id, product.request_count)}
                className="button-like"
              >
                <img className="icon" src="https://scontent.fkgl4-1.fna.fbcdn.net/m1/v/t6/An_Hu2MGghXfWhrGQLADBvMqHBUxBoVMkVyPd6nn5lnsrwR-vi4BbkvRAbUlxUY9vGSt_yQiOgk2XFidRDZtah01ve6N3Ln9ICuzKj0ZRWl7nKjEJUNFh5EMkRfQa4lMXQ.png?ccb=10-5&amp;oh=00_AfA29E8TGGwFzpSbPtpaDfTXHa_V0tMYVQ_HiZmf1QaAOA&amp;oe=65CE93EC&amp;_nc_sid=7da55a" alt="" style={{ height: '20px', width: '20px' }} />
                <span>{product.request_count}</span>
              </button>
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
            placeholder="Add the requested product... "
          />
          <input
            type="number"
            id="unitPurchasePrice"
            value={requestCount}
            required
            inputMode="numeric"
            hidden
          />
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
