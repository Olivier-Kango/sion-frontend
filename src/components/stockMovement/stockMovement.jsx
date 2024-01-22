import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addStockMovement } from '../../redux/stockMovement/stockMovement';
import { userLogout } from '../../redux/users/users';
import '../ordering/Ordering.scss';
import './stockMovement.scss';

const StockMovements = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState('');
  const [movementType, setMovementType] = useState('');
  const [reason, setReason] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const user = useSelector((state) => state.user.data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { quantity, movementType, reason };

    const response = await dispatch(addStockMovement(data));
    if (response.type === 'ADD_STOCK_MOVEMENT/fulfilled') {
      setIsSubmitted(true);
    }

    // Réinitialisez le formulaire après l'enregistrement
    setQuantity('');
    setMovementType('');
    setReason('');
  };

  const handleLogout = () => {
    dispatch(userLogout());
    navigate('/login-page');
  };

  if (user.role === 'admin') {
    return (
      <div className="warning">
        <h1>Accessing Stock Movement</h1>
        <p>
          To Access Stock Movement, you need to be an admin.
          <br />
          <br />
          Please,
          {' '}
          <span
            role="button"
            tabIndex={0}
            className="login-manager"
            onClick={handleLogout}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleLogout();
              }
            }}
          >
            click here
          </span>
          {' '}
          to log in
        </p>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="success-message">
        <p>Stock has been added successfully!</p>
        <div className="success-actions">
          <Link to="/management">
            <button type="button">Go to Management</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="add-order-container">
      <h2>Stock Movements</h2>
      <form onSubmit={handleSubmit} className="add-order-form">
        <div className="add-order-form-group">
          <input
            type="number"
            id="quantity"
            value={quantity}
            required
            onChange={(e) => {
              const inputValue = e.target.value;
              if (!Number.isNaN(inputValue) && inputValue >= 0) {
                setQuantity(inputValue);
              }
            }}
            placeholder="Enter quantity"
            inputMode="numeric"
          />
        </div>
        <div className="add-order-form-group">
          <select
            value={movementType}
            onChange={(e) => setMovementType(e.target.value)}
            className="category-select"
          >
            <option value="" className="placeholder-option">Select stock&apos;s Movement</option>
            <option value="Entry">Entry</option>
            <option value="Sale">Sale</option>
            <option value="Loss">Loss</option>
            <option value="Gift">Gift</option>
          </select>
        </div>
        <div className="add-order-form-group">
          <input
            type="text"
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Enter Reason"
          />
        </div>
        <button type="submit">Add Movement</button>
      </form>
    </div>
  );
};

export default StockMovements;
