import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { addOrder } from '../../redux/actions/OrderActions';
import './Ordering.scss';

const AddOrder = () => {
  const { id } = useParams();
  const foodId = parseInt(id, 10);

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState('');
  const [deliveryPoint, setDeliveryPoint] = useState('');
  const [userId, setUserId] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(addOrder({
      quantity,
      delivery_point: deliveryPoint,
      food_id: foodId,
      user_id: userId,
    }));
    if (response && response.id) {
      setIsSubmitted(true);
    }
    setQuantity('');
    setDeliveryPoint('');
    setUserId('');
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
          <h2>Add Order</h2>
          <p className="error">Please add a Quantiy, a Delivery point & Valid User</p>
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
              <input type="hidden" id="foodId" value={foodId} />
            </div>
            <div className="add-order-form-group">
              <select id="userId" value={userId} onChange={(e) => setUserId(e.target.value)}>
                <option value="">Select User</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
            <button type="submit">Add Order</button>
          </form>
        </>
      )}
    </div>
  );
};

export default AddOrder;
