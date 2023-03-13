import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getFoodDetails } from '../../redux/foods/foodDetails';

const FoodDetails = () => {
  const { id } = useParams();
  const food = useSelector((state) => state.food);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getFoodDetails(id));
    }
  }, [dispatch, id]);

  // console.log(food);

  return (

    <div>
      <p><h1>Find Food details below</h1></p>
      <br />
      <h2>
        Food Name:
        {food.name}
      </h2>
      <p>
        <h2>
          Food Quantity:
          {food.quantity}
        </h2>
      </p>
      <p>
        <h2>
          Unit Price:
          {food.unit_price}
        </h2>
      </p>
    </div>

  );
};

export default FoodDetails;
