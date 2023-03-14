import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import './Food.scss';

const FoodDetails = () => {
  const { id } = useParams();
  const foods = useSelector((state) => state.foods);
  const food = foods.find((f) => f.id === parseInt(id, 10));

  return (
    <div className="food-details">
      <h1>
        {food?.name}
      </h1>
      <img src={food?.image} className="img-details" alt={food?.name} />
      <p>
        We have
        {' '}
        {food?.quantity}
        {' '}
        {food?.name}
        {' '}
        for a price of
        {' '}
        {food?.unit_price}
        $ per dish
      </p>
      <div className="button-container">
        <Link to="/" className="link-back">Back to Home</Link>
      </div>
    </div>

  );
};

export default FoodDetails;
