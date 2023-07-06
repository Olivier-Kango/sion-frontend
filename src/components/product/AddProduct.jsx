import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BiPlusCircle, BiTrash } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { addProduct } from '../../redux/products/products';
import '../ordering/Ordering.scss';
import './Product.scss';

const AddProduct = () => {
  const dispatch = useDispatch();
  const [name, setname] = useState('');
  const [image, setimage] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = {
      name,
      image: image || null, // Make sure to pass null if image is not set
      unit_price: unitPrice,
    };

    const response = await dispatch(addProduct(productData));
    if (response.type === 'ADD_PRODUCT/fulfilled') {
      setIsSubmitted(true);
    }
    setname('');
    setimage(null); // Reset image state to null
    setUnitPrice('');
  };

  const handleContinueShopping = () => {
    setIsSubmitted(false);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ml_default');

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/du1qvhkp2/image/upload',
        formData,
      );

      const imageUrl = response.data.secure_url;
      // Do something with the uploaded image URL
      setimage(imageUrl);
    } catch (error) {
      // console.log('Error uploading image: ', error);
    }
  };

  const deleteImage = () => {
    setimage(null); // Reset image state to null
  };

  return (
    <div className="add-order-container">
      {isSubmitted ? (
        <div className="success-message">
          <p>Your product has been added successfully!</p>
          <div className="success-actions">
            <button type="button" onClick={handleContinueShopping}>Continue Adding</button>
            <Link to="/">
              <button type="button">Go to Home</button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <h2>Add Product</h2>
          <form onSubmit={handleSubmit} className="add-order-form">
            <div className="add-order-form-group">
              <input type="text" id="name" value={name} required onChange={(e) => setname(e.target.value)} placeholder="Enter product's Name" />
            </div>
            <div className="add-order-form-group">
              <input
                type="number"
                id="unitPrice"
                value={unitPrice}
                required
                onChange={(e) => {
                  if (e.target.value >= 0) {
                    setUnitPrice(e.target.value);
                  }
                }}
                placeholder="Enter Unit Price"
                inputMode="numeric"
              />
            </div>
            <div className="add-order-form-group">
              <input required type="file" id="image" onChange={handleImageUpload} accept="image/*" />
              {image && (
                <div className="image-preview">
                  <img src={image} alt="Uploaded" />
                  <button type="button" onClick={deleteImage} className="remove-image">
                    <BiTrash />
                  </button>
                </div>
              )}
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
