import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getAllFoods } from '../../redux/foods/foods';
import './Food.scss';

const FoodDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.foods);
  const food = foods.find((f) => f.id === parseInt(id, 10));

  useEffect(() => {
    if (foods.length === 0) {
      dispatch(getAllFoods());
    }
  }, [dispatch, foods]);

  if (!food) {
    return <div>Food not found</div>;
  }

  return (
    <div className="food-details">
      <div className="food-details-img">
        <img src={food?.image} className="img-details" alt={food?.name} />
        <div className="button-container">
          <Link to="/home" className="link-back">&#8882;</Link>
        </div>
      </div>
      <div className="food-details-body">
        <div>
          <h1>
            {food?.name}
          </h1>
          <br />
          <p>
            <span>
              Price
            </span>
            <span>
              {' '}
              {food?.unit_price}
              $ per dish
            </span>
          </p>
          <p>
            <span>
              Prepared at
            </span>
            <span>
              {' '}
              {food?.created_at.slice(0, 10)}
            </span>
          </p>
          <p>
            <span>
              Prepared on
            </span>
            <span>
              {' '}
              {food?.created_at.slice(11, 16)}
            </span>
          </p>
        </div>
        <Link to={`/addorder/${food.id}`}>
          <button type="button" className="button-order">
            Order
            {' '}
            {food.name}
          </button>
        </Link>
      </div>
    </div>

  );
};

export default FoodDetails;
