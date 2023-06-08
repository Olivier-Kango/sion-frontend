import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { addOrder } from '../../redux/actions/OrderActions';
import './Ordering.scss';

const AddOrder = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const userId = useSelector((state) => state.user?.data.id);
  const products = useSelector((state) => state.products);
  const product = products.find((f) => f.id === parseInt(id, 10));

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState('');
  const [deliveryPoint, setDeliveryPoint] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(addOrder({
      quantity,
      delivery_point: deliveryPoint,
      product_id: productId,
      user_id: userId,
    }));
    if (response && response.id) {
      setIsSubmitted(true);
    }
    setQuantity('');
    setDeliveryPoint('');
  };

  const handleContinueShopping = () => {
    setIsSubmitted(false);
  };

  const handleGoToHome = () => {
    // redirect to the home page
  };

  return (
    <div className="add-order-container">
      {isSubmitted ? (
        <div className="success-message">
          <p>Your order has been added successfully!</p>
          <div className="success-actions">
            <button type="button" onClick={handleContinueShopping}>Continue Shopping</button>
            <Link to="/home">
              <button type="button" onClick={handleGoToHome}>Go to Home</button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <h2>
            Order
            {' '}
            {product.name}
          </h2>
          <p className="error">Please add a Quantiy & a Delivery point</p>
          <form onSubmit={handleSubmit} className="add-order-form">
            <div className="add-order-form-group">
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => {
                  if (e.target.value > 0) {
                    setQuantity(e.target.value);
                  }
                }}
                placeholder="Enter quantity"
              />
            </div>
            <div className="add-order-form-group">
              <input type="text" id="deliveryPoint" value={deliveryPoint} onChange={(e) => setDeliveryPoint(e.target.value)} placeholder="Delivery Point" />
            </div>
            <div className="add-order-form-group">
              <input type="hidden" id="productId" value={productId} />
            </div>
            <div className="add-order-form-group">
              <input type="hidden" id="userId" value={userId} />
            </div>
            <button type="submit">Add Order</button>
          </form>
        </>
      )}
    </div>
  );
};

export default AddOrder;
