/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { RingLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { css } from '@emotion/react';
import { allOrders, deleteOrder } from '../../redux/actions/OrderActions';
import { getAllProducts } from '../../redux/products/products';

const Ordering = () => {
  const dispatch = useDispatch();
  const orderData = useSelector((state) => state.orders);
  const { orders } = orderData;
  const products = useSelector((state) => state.products.products);
  const u_id = useSelector((state) => state.user.data?.id);
  const isAuthenticated = useSelector((state) => state.user.loggedIn);

  const [localOrders, setLocalOrders] = useState([]);

  const override = css`
  display: block;
  margin: 0 auto;
`;

  useEffect(() => {
    dispatch(allOrders());
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    setLocalOrders(orders[0] || []);
  }, [orders]);

  if (!orders[0] && isAuthenticated) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <RingLoader color="#123abc" css={override} size={200} />
        <p className="s">
          Loading...
        </p>
      </div>
    );
  }

  const handleDelete = (id) => {
    dispatch(deleteOrder(id));
    setLocalOrders(localOrders.filter((order) => order.id !== id));
  };

  const userOrders = localOrders.filter((order) => order.user_id === u_id);

  return (
    <section className="orders-section">
      <h2 className="navbar-brand">My Orders</h2>
      <h2 className="navbar-brand amount">
        Total amount :
        {' '}
        {userOrders.reduce((total, order) => {
          // eslint-disable-next-line max-len
          const product = Array.isArray(products) ? products.find((product) => product?.id === order.product_id) : null;
          const total_amount = total + (product?.unit_price * order.quantity);
          return parseFloat(total_amount.toFixed(2)) || 0;
        }, 0)}
        {' '}
        $
      </h2>
      <div className="order-lists">
        {userOrders.length === 0 ? (
          <p className="s">
            {isAuthenticated ? (
              <span>Please Order a Product</span>
            ) : (
              <span>
                Please
                {' '}
                <Link to="/login-page" style={{ textDecoration: 'underline' }}>Sign in</Link>
                {' '}
                and Order a Product
              </span>
            )}
          </p>
        ) : (
          userOrders.map((order) => {
            // eslint-disable-next-line max-len
            const product = Array.isArray(products) ? products.find((f) => f.id === order.product_id) : null;
            if (!product) {
              return null;
            }
            return (
              <div className="card  me-2" key={order.id} style={{ backgroundColor: '#ffffff' }}>
                <Link to={`/productdetails/${product.id}`}>
                  <img src={product?.image} className="card-img-top" alt={order.name} />
                </Link>
                <div className="card-body">
                  <Link to={`/productdetails/${product.id}`}>
                    <h5 className="card-title">{product?.name}</h5>
                  </Link>
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
                    {order.quantity}
                    {' '}
                    X
                    {' '}
                    {product?.unit_price}
                    {' '}
                    $
                    {' '}
                    =
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
                  <button type="button" onClick={() => handleDelete(order.id)}>
                    Delete
                  </button>
                </div>
              </div>
            );
          }))}
      </div>
    </section>
  );
};

export default Ordering;
