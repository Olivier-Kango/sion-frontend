import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const requestedProducts = useSelector((state) => state.requestedProducts.requestedProducts);

  return (
    <div className="container">
      {requestedProducts.map((product) => (
        // eslint-disable-next-line react/jsx-key
        <h1>{product}</h1>
      ))}
    </div>
  );
};

export default Home;
