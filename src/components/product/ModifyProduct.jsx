import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiArrowBack, BiTrash } from 'react-icons/bi';
import { FaSpinner } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { modifyProduct } from '../../redux/products/products';
import '../ordering/Ordering.scss';
import './Product.scss';

const ModifyProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  // eslint-disable-next-line max-len
  const productToModify = useSelector((state) => state.products.products.find((product) => product.id === Number(id)));

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    // Populate the form fields with the product data when the component mounts
    if (productToModify) {
      setName(productToModify.name);
      setImage(productToModify.image);
      setUnitPrice(productToModify.unit_price);
      setCategory(productToModify.category);
      setSubcategory(productToModify.subcategory);
      setQuantity(productToModify.quantity);
    }
  }, [productToModify]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare the updated product data
    const updatedProductData = {
      name,
      image,
      unit_price: unitPrice,
      category,
      subcategory,
      quantity,
    };

    try {
      // Dispatch the modifyProduct action with the updated data
      await dispatch(modifyProduct({ id, updatedProductData }));

      // Handle success, e.g., show a success message or redirect
      setIsSubmitting(false);
    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error('Error modifying product:', error);
      setIsSubmitting(false);
    }
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
      setImage(imageUrl);
    } catch (error) {
      // console.log('Error uploading image: ', error);
    } finally {
      setIsUploading(false);
    }
  };

  const deleteImage = () => {
    setImage(null);
  };

  return (
    <div className="modify-product-container">
      <Link to="/">
        <button className="back-button" type="button">
          <BiArrowBack />
          Back to Products
        </button>
      </Link>

      <h2>Modify Product</h2>
      <form onSubmit={handleSubmit} className="modify-product-form">
        <div className="add-order-form-group">
          <input type="text" id="name" value={name} required onChange={(e) => setName(e.target.value)} placeholder="Enter product's Name" />
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
          <input
            type="number"
            id="product-quantity"
            value={quantity}
            required
            onChange={(e) => {
              if (e.target.value >= 0) {
                setQuantity(e.target.value);
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
            onChange={(e) => setCategory(e.target.value)}
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
            <option value="Chickens">Chickens</option>
          </select>
        </div>
        <div className="add-order-form-group">
          <select
            id="subcategory"
            value={subcategory}
            required
            onChange={(e) => setSubcategory(e.target.value)}
            className="category-select"
          >
            <option value="" className="placeholder-option">Select product&apos;s Subcategory</option>
            <option value="Building">Building</option>
            <option value="Tools">Tools</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Paint">Paint</option>
            <option value="Electrical">Electrical</option>
            <option value="General">General</option>
            <option value="Telephony">Telephony</option>
            <option value="Mineral Water">Mineral Water</option>
            <option value="Beverage Store">Beverage Store</option>
            <option value="IT Services">IT Services</option>
            <option value="Gas Energy">Gas Energy</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Chickens">Chickens</option>
          </select>
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
          {isUploading && (
          <div className="loading-spinner">
            <FaSpinner className="spinner-icon" />
          </div>
          )}
        </div>
        <Link to="/">
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <FaSpinner className="spinner-icon" />
                <span className="text">Modifying...</span>
              </>
            ) : (
              'Modify Product'
            )}
          </button>
        </Link>
      </form>
    </div>
  );
};

export default ModifyProduct;
