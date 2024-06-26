import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiPlusCircle, BiTrash } from 'react-icons/bi';
import { FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { addProduct, setShowLeftBar } from '../../redux/products/products';
import Spinner from '../spinner/Spinner';
import '../ordering/Ordering.scss';
import './Product.scss';

const AddProduct = () => {
  const dispatch = useDispatch();
  const [name, setname] = useState('');
  const [image, setimage] = useState('');
  const [category, setcategory] = useState('');
  const [subcategory, setsubcategory] = useState('');
  const [quantity, setquantity] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [unitPurchasePrice, setUnitPurchasePrice] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const showLeftbar = useSelector((state) => state.products.showLeftBar);

  useEffect(() => {
    setShowLeftBar(showLeftbar);
  }, [showLeftbar]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const productData = {
      name,
      image: image || null,
      unit_price: unitPrice,
      unit_purchase_price: unitPurchasePrice,
      category,
      subcategory,
      quantity,
    };

    const response = await dispatch(addProduct(productData));
    if (response.type === 'ADD_PRODUCT/fulfilled') {
      setIsSubmitted(true);
    }
    setname('');
    setimage(null);
    setUnitPrice('');
    setUnitPurchasePrice('');
    setcategory('');
    setsubcategory('');
    setquantity('');
    setIsSubmitting(false);
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
      setIsUploading(true);

      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/du1qvhkp2/image/upload',
        formData,
      );

      const imageUrl = response.data.secure_url;
      setimage(imageUrl);
    } catch (error) {
      // console.log('Error uploading image: ', error);
    } finally {
      setIsUploading(false);
    }
  };

  const deleteImage = () => {
    setimage(null);
  };

  return (
    <div className="add-order-container">
      {isSubmitted ? (
        <div className="success-message">
          <p>Your product has been added successfully!</p>
          <div className="success-actions">
            <button type="button" onClick={handleContinueShopping}>Continue Adding</button>
            <Link to="/" onClick={dispatch(setShowLeftBar(false))}>
              <button type="button">Go to Home</button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <h2>Add Product</h2>
          <form onSubmit={handleSubmit} className="add-order-form">
            <div className="add-order-form-group">
              <input
                type="text"
                id="name"
                value={name}
                required
                onChange={(e) => setname(e.target.value.slice(0, 30))}
                placeholder="Enter product's Name"
              />
            </div>
            <div className="add-order-form-group">
              <input
                type="number"
                id="unitPurchasePrice"
                value={unitPurchasePrice}
                required
                onChange={(e) => {
                  if (e.target.value >= 0) {
                    setUnitPurchasePrice(e.target.value.slice(0, 7));
                  }
                }}
                placeholder="Enter Unit Purchase Price"
                inputMode="numeric"
              />
            </div>
            <div className="add-order-form-group">
              <input
                type="number"
                id="unitPrice"
                value={unitPrice}
                required
                onChange={(e) => {
                  if (e.target.value >= 0) {
                    setUnitPrice(e.target.value.slice(0, 7));
                  }
                }}
                placeholder="Enter Unit Price"
                inputMode="numeric"
              />
            </div>
            <div className="add-order-form-group">
              <input
                type="number"
                id="product-quantity"
                value={quantity}
                required
                onChange={(e) => {
                  if (e.target.value >= 0) {
                    setquantity(e.target.value.slice(0, 7));
                  }
                }}
                placeholder="Enter Quantity"
                inputMode="numeric"
              />
            </div>
            <div className="add-order-form-group">
              <select
                id="category"
                value={category}
                required
                onChange={(e) => setcategory(e.target.value)}
                className="category-select"
              >
                <option value="" className="placeholder-option">Select product&apos;s Category</option>
                <option value="Hardware Store">Hardware Store</option>
                <option value="Mineral Water">Mineral Water</option>
                <option value="Beverage Store">Beverage Store</option>
                <option value="Electronics">Electronics</option>
                <option value="IT Services">IT Services</option>
                <option value="Gas Energy">Gas Energy</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Agri Food">Agri Food</option>
                <option value="Home Deco">Home Deco</option>
              </select>
            </div>
            <div className="add-order-form-group">
              <select
                id="subcategory"
                value={subcategory}
                required
                onChange={(e) => setsubcategory(e.target.value)}
                className="category-select"
              >
                <option value="" className="placeholder-option">Select product&apos;s Subcategory</option>
                <option value="Building">Building</option>
                <option value="Tools">Tools</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Paint">Paint</option>
                <option value="Welding">Welding</option>
                <option value="Electrical">Electrical</option>
                <option value="Electronics">Electronics</option>
                <option value="Cleaning">Cleaning</option>
                <option value="General">General</option>
                <option value="Telephony">Telephony</option>
                <option value="Mineral Water">Mineral Water</option>
                <option value="Beverage Store">Beverage Store</option>
                <option value="IT Services">IT Services</option>
                <option value="Gas Energy">Gas Energy</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Agri Food">Agri Food</option>
                <option value="Home Deco">Home Deco</option>
              </select>
            </div>
            <div className="add-order-form-group">
              <input required type="file" id="image" onChange={handleImageUpload} accept="image/*" />
              {image && (
                <div className="image-preview">
                  <img src={image} alt="Uploaded" />
                  <button type="button" onClick={deleteImage} className="remove-image" aria-label="Delete">
                    <BiTrash />
                  </button>
                </div>
              )}
              {isUploading && (
                <div className="loading-spinner">
                  <FaSpinner className="spinner-icon" />
                </div>
              )}
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Spinner />
                  <span className="text">Adding...</span>
                </>
              ) : (
                <>
                  <span className="icon"><BiPlusCircle /></span>
                  <span className="text">Add Product</span>
                </>
              )}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default AddProduct;
