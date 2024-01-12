import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRequestedProducts, incrementRequestCount } from '../../redux/products/requested_products';

const Home = () => {
  const requestedProducts = useSelector((state) => state.requestedProducts.requestedProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRequestedProducts());
  }, [dispatch]);

  const handleIncrementRequest = (productId) => {
    dispatch(incrementRequestCount(productId));
  };

  return (
    <div className="container">
      {requestedProducts.map((product) => (
        <h1 key={product.id}>
          <span>{product.name}</span>
          {' '}
          <button
            type="button"
            onClick={() => handleIncrementRequest(product.id)}
          >
            {product.request_count}
          </button>
        </h1>
      ))}
    </div>
  );
};

export default Home;
