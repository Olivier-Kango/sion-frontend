import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRequestedProducts } from '../../redux/products/requested_products';

const Home = () => {
  const requestedProducts = useSelector((state) => state.requestedProducts.requestedProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRequestedProducts());
  }, [dispatch]);

  return (
    <div className="container">
      {requestedProducts.map((product) => (
        <h1 key={product.id}>{product.name}</h1>
      ))}
    </div>
  );
};

export default Home;
