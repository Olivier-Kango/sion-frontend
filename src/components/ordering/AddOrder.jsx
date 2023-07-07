import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
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
  const [quantity, setQuantity] = useState(1);
  const [deliveryPoint, setDeliveryPoint] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (quantity < 1) {
      setShowAlert(true);
      return;
    }

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

  return (
    <div className="add-order-container">
      {isSubmitted ? (
        <div className="success-message">
          <p>Your order has been added successfully!</p>
          <div className="success-actions">
            <button type="button" onClick={handleContinueShopping}>Continue Shopping</button>
            <Link to="/ordering#endOfPageRef">
              <button type="button">Go to My Orders</button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <h2>
            {product.name}
          </h2>
          <form onSubmit={handleSubmit} className="add-order-form">
            {showAlert && (
            <div style={{ color: 'red', fontSize: '16px', marginBottom: '4px' }}>
              Quantity must be at least 1.
            </div>
            )}
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
              <input type="text" id="deliveryPoint" required value={deliveryPoint} onChange={(e) => setDeliveryPoint(e.target.value)} placeholder="Delivery Point" />
            </div>
            <div className="add-order-form-group">
              <input type="hidden" id="productId" value={productId} />
            </div>
            <div className="add-order-form-group">
              <input type="hidden" id="userId" value={userId} />
            </div>
            <button type="submit">
              <span className="icon"><FaShoppingCart /></span>
              <span className="text">Order</span>
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default AddOrder;
