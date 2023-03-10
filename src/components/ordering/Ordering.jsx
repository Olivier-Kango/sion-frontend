/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { allOrders, singleOrder, deleteOrder } from '../../redux/actions/OrderActions';
import { getAllFoods } from '../../redux/foods/foods';
import styles from './Ordering.css';

const Ordering = () => {
  const dispatch = useDispatch();
  const orderData = useSelector((state) => state.orders);
  const { order, orders } = orderData;
  const foods = useSelector((state) => state.foods);

  useEffect(() => {
    dispatch(allOrders());
    dispatch(getAllFoods());
  }, [dispatch]);

  useEffect(() => {
    dispatch(singleOrder());
  }, [dispatch]);

  if (!orders[0]) {
    return (
      <h6 className={styles.loading}>Loading ...</h6>
    );
  }

  const handleDelete = (id) => {
    dispatch(deleteOrder(id));
  };

  return (
    <section className="orders-section">
      <h2 className="navbar-brand">MY ORDERS</h2>
      <div className="card-group order-lists mx-auto">
        {orders[0].map((order) => {
          const food = foods.find((f) => f.id === order.food_id);
          return (
            <div className="card  me-2" key={order.id} style={{ backgroundColor: '#fbfbfb' }}>
              <img src={food.image} className="card-img-top" alt={order.name} />
              <div className="card-body">
                <h5 className="card-title">{food.name}</h5>
                <p className="card-text">
                  Order date:
                  {' '}
                  {order.created_at.slice(0, 10)}
                </p>
                <p className="card-text">
                  Ordered on:
                  {' '}
                  {order.created_at.slice(11, 19)}
                </p>
                <p className="card-text">
                  Order price:
                  {' '}
                  {food.unit_price}
                  {' '}
                  $ (USD)
                </p>
                <p className="card-text">
                  Ordered at:
                  {' '}
                  {order.delivery_point}
                </p>
                <button type="button" className="form-control btn btn-outline-secondary mx-auto" onClick={() => dispatch(deleteOrder(order.id))}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Ordering;
