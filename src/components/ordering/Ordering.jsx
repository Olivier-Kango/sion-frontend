/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allOrders, deleteOrder } from '../../redux/actions/OrderActions';
import styles from './Ordering.scss';
import { getAllProducts } from '../../redux/products/products';

const Ordering = () => {
  const dispatch = useDispatch();
  const orderData = useSelector((state) => state.orders);
  const { orders } = orderData;
  const products = useSelector((state) => state.products);
  const u_id = useSelector((state) => state.user.data?.id);

  const [localOrders, setLocalOrders] = useState([]);

  useEffect(() => {
    dispatch(allOrders());
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    setLocalOrders(orders[0] || []);
  }, [orders]);

  if (!orders[0]) {
    return (
      <h6 className={styles.loading}>Loading ...</h6>
    );
  }

  const handleDelete = (id) => {
    dispatch(deleteOrder(id));
    setLocalOrders(localOrders.filter((order) => order.id !== id));
  };

  const userOrders = localOrders.filter((order) => order.user_id === u_id);

  return (
    <section className="orders-section">
      <h2 className="navbar-brand">MY ORDERS</h2>
      <h2 className="navbar-brand">
        Total amount :
        {' '}
        {userOrders.reduce((total, order) => {
          const product = products.find((product) => product?.id === order.product_id);
          const total_amount = total + (product?.unit_price * order.quantity);
          return total_amount || 0;
        }, 0)}
        {' '}
        $
      </h2>
      <div className="order-lists">
        {userOrders.length === 0 ? <p className="s">Please Order a Product</p> : userOrders.map((order) => {
          const product = products.find((f) => f.id === order.product_id);
          return (
            <div className="card  me-2" key={order.id} style={{ backgroundColor: '#fbfbfb' }}>
              <img src={product?.image} className="card-img-top" alt={order.name} />
              <div className="card-body">
                <h5 className="card-title">{product?.name}</h5>
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
                  {product?.unit_price * order.quantity}
                  {' '}
                  $ (USD)
                </p>
                <p className="card-text">
                  Ordered at:
                  {' '}
                  {order.delivery_point}
                </p>
                <button type="button" className="form-control btn btn-outline-secondary mx-auto" onClick={() => handleDelete(order.id)}>
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
