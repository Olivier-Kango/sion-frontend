/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { allOrders, singleOrder } from '../../redux/actions/OrderActions';
import styles from './Ordering.css';

const Ordering = () => {
  const dispatch = useDispatch();
  const orderData = useSelector((state) => state.orders);
  const { order, orders } = orderData;
  console.log('orders', orderData);
  useEffect(() => {
    dispatch(allOrders());
  }, [dispatch]);

  useEffect(() => {
    dispatch(singleOrder());
  }, [dispatch]);

  if (!orders[0]) {
    return (
      <h6 className={styles.loading}>Loading ...</h6>
    );
  }

  return (
    <section className="orders-section">
      <h2 className="navbar-brand">MY ORDERS</h2>
      <div className="card-group order-lists mx-auto">
        {orders[0].map((order) => (
          <div className="card  me-2" key={order.id} style={{ backgroundColor: '#fbfbfb' }}>
            <img src="..." className="card-img-top" alt={order.name} />
            <div className="card-body">
              <h5 className="card-title">{order.name}</h5>
              <p className="card-text">
                order time:
                {' '}
                {order.created_at}
              </p>
              <p className="card-text">
                order price:
                {' '}
                {order.price}
              </p>
              <p className="card-text">
                Ordered on:
                {' '}
                <small className="text-muted">{order.created_at}</small>
              </p>
              <Link to={`${order.id}`} onClick={() => dispatch(singleOrder())}>
                <button type="button" className="form-control btn btn-outline-secondary mx-auto">Delete</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ordering;
