import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BiPlusCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { addProduct } from '../../redux/products/products';
import '../ordering/Ordering.scss';

const AddProduct = () => {
  const dispatch = useDispatch();
  const [name, setname] = useState('');
  const [image, setimage] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(addProduct({
      name,
      image,
      unit_price: unitPrice,
    }));
    if (response.type === 'ADD_PRODUCT/fulfilled') {
      setIsSubmitted(true);
    }
    setname('');
    setimage('');
    setUnitPrice('');
  };

  const handleContinueShopping = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="add-order-container">
      {isSubmitted ? (
        <div className="success-message">
          <p>Your product has been added successfully!</p>
          <div className="success-actions">
            <button type="button" onClick={handleContinueShopping}>Continue Adding</button>
            <Link to="/home">
              <button type="button">Go to Home</button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <h2>Add Product</h2>
          <form onSubmit={handleSubmit} className="add-order-form">
            <div className="add-order-form-group">
              <input type="text" id="name" value={name} onChange={(e) => setname(e.target.value)} placeholder="Enter product's Name" />
            </div>
            <div className="add-order-form-group">
              <input type="text" id="image" value={image} onChange={(e) => setimage(e.target.value)} placeholder="Add src (url) of the image" />
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
            <button type="submit">
              <span className="icon"><BiPlusCircle /></span>
              <span className="text">Add Product</span>
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default AddProduct;
