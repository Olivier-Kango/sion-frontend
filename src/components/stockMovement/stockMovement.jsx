import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct } from '../../redux/products/products';

function StockMovements() {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const [movementType, setMovementType] = useState('Entry');
  const [reason, setReason] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { quantity, movementType, reason };

    const response = await dispatch(addProduct(data));
    if (response.type === 'ADD_STOCK_MOVEMENT/fulfilled') {
      setIsSubmitted(true);
    }

    // Réinitialisez le formulaire après l'enregistrement
    setQuantity(0);
    setMovementType('Entry');
    setReason('');
  };

  return (
    <div>
      {isSubmitted ? (
        <div className="success-message">
          <p>Stock has been added successfully!</p>
          <div className="success-actions">
            <Link to="/management">
              <button type="button">Go to Management</button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <h2>Stock Movements</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="quantity">
                Quantity:
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="movement_type">
                Movement Type:
                <select
                  value={movementType}
                  onChange={(e) => setMovementType(e.target.value)}
                >
                  <option value="Entry">Entry</option>
                  <option value="Sale">Sale</option>
                  <option value="Loss">Loss</option>
                  <option value="Gift">Gift</option>
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="reason">
                Reason:
                <input
                  type="text"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
              </label>
            </div>
            <button type="submit">Add Movement</button>
          </form>
        </>
      )}
    </div>
  );
}

export default StockMovements;
