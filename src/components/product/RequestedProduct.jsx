import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LuSendHorizonal } from 'react-icons/lu';
import {
  getAllRequestedProducts,
  incrementRequestCount,
  resetRequestCount,
  addRequestedProducts,
  deleteRequestedProduct,
} from '../../redux/products/requested_products';
import './RequestedProduct.scss';

const RequestedProduct = () => {
  const requestedProducts = useSelector((state) => state.requestedProducts.requestedProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRequestedProducts());
  }, [dispatch]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = {
      name,
      request_count: requestCount,
    };

    console.log('Olk :', productData);

    dispatch(addRequestedProducts(productData))
      .then((action) => {
        dispatch({
          type: 'ADD_REQUESTED_PRODUCT/fulfilled',
          payload: action.payload,
        });
      });
    setname('');
  };

  return (
    <div className="container">
      <div className="container-products">
        {requestedProducts && requestedProducts
          .sort((a, b) => b.request_count - a.request_count)
          .map((product) => (
            <h1 key={product.id}>
              <span>{product.name}</span>
              {' '}
              <button
                type="button"
                onClick={() => handleResetRequest(product.id)}
              >
                reset
              </button>
              {' '}
              <button
                type="button"
                onClick={() => handleIncrementRequest(product.id, product.request_count)}
              >
                Increment
              </button>
              <button
                type="button"
                onClick={() => handleDeleteRequestedProduct(product.id)}
              >
                DELETE
              </button>
              {' '}
              {product.request_count}
            </h1>
          ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            value={name}
            required
            onChange={(e) => setname(e.target.value)}
            placeholder="Enter Requestedproduct's Name"
          />
          <input
            type="number"
            id="unitPurchasePrice"
            value={requestCount}
            required
            inputMode="numeric"
            hidden
          />
          <button type="submit">
            <LuSendHorizonal />
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestedProduct;
