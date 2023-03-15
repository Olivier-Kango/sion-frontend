import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFood } from '../../redux/foods/foods';
import '../ordering/Ordering.scss';

const AddFood = () => {
  const dispatch = useDispatch();
  const [name, setname] = useState('');
  const [image, setimage] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(addFood({
      name,
      image,
      quantity,
      unit_price: unitPrice,
    }));
    if (response.type === 'ADD_FOOD/fulfilled') {
      setIsSubmitted(true);
    }
    setname('');
    setimage('');
    setQuantity('');
    setUnitPrice('');
  };

  const handleContinueShopping = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="add-order-container">
      {isSubmitted ? (
        <div className="success-message">
          <p>Your food has been added successfully!</p>
          <div className="success-actions">
            <button type="button" onClick={handleContinueShopping}>Continue Adding</button>
            <Link to="/">
              <button type="button">Go to Home</button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <h2>Add Food</h2>
          <p className="error">Please add name, img-src, quantity & price</p>
          <form onSubmit={handleSubmit} className="add-order-form">
            <div className="add-order-form-group">
              <input type="text" id="name" value={name} onChange={(e) => setname(e.target.value)} placeholder="Enter food's Name" />
            </div>
            <div className="add-order-form-group">
              <input type="text" id="image" value={image} onChange={(e) => setimage(e.target.value)} placeholder="Add src (url) of the image" />
            </div>
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
              <input
                type="number"
                id="unitPrice"
                value={unitPrice}
                onChange={(e) => {
                  if (e.target.value > 0) {
                    setUnitPrice(e.target.value);
                  }
                }}
                placeholder="Enter Unit Price"
              />
            </div>
            <button type="submit">Add Food</button>
          </form>
        </>
      )}
    </div>
  );
};

export default AddFood;
