import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FaShoppingCart, FaHome, FaIceCream, FaCrow,
} from 'react-icons/fa';
import { MdDevices } from 'react-icons/md';
import { RiHome3Fill } from 'react-icons/ri';
import {
  GiNails, GiFire, GiWaterDrop, GiProcessor,
} from 'react-icons/gi';
import { AiFillPlusCircle, AiOutlineBars } from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useMediaQuery } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Footer from '../footer/Footer';
import { setSelectedCategory, showCategories, arrowDirection } from '../../redux/products/products';
import './Leftbar.scss';

const LeftBar = ({
  open, handleLinkClick, handleHamburgerClick,
}) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const { pathname } = useLocation();
  const selectedCategory = useSelector((state) => state.products.selectedCategory);
  const showCategory = useSelector((state) => state.products.showCategories);
  const arrow = useSelector((state) => state.products.arrowDirection);
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const location = useLocation();
  const [showSubcategories, setShowSubcategories] = useState(false);

  const handleAddProductClick = () => {
    dispatch(setSelectedCategory(''));
    dispatch(arrowDirection('down'));
    dispatch(showCategories(false));
  };

  const toggleCategories = () => {
    dispatch(showCategories(!showCategory));
    dispatch(arrowDirection(showCategory ? 'down' : 'up'));
  };

  const handleCategoryClick = (category) => {
    dispatch(setSelectedCategory(category));
    if (isMobile) {
      handleHamburgerClick();
    }
    navigate('/');
  };

  const categories = [
    { id: 7, name: 'Hardware Store', icon: <GiNails /> },
    { id: 1, name: 'Mineral Water', icon: <GiWaterDrop /> },
    { id: 2, name: 'Beverage Store', icon: <FaIceCream /> },
    { id: 3, name: 'Electronics', icon: <MdDevices /> },
    { id: 4, name: 'IT Services', icon: <GiProcessor /> },
    { id: 5, name: 'Gas Energy', icon: <GiFire /> },
    { id: 6, name: 'Real Estate', icon: <FaHome /> },
    { id: 8, name: 'Chickens', icon: <FaCrow /> },
  ];

  const shouldShowLeftbar = location.pathname !== '/management';

  const toggleSubcategories = (categoryName) => {
    if (categoryName === 'Hardware Store') {
      setShowSubcategories(!showSubcategories);
    } else {
      setShowSubcategories(false);
    }
    handleCategoryClick(categoryName);
  };

  return (
    <div className={`leftbar-container${open ? ' open' : ''}`}>
      {shouldShowLeftbar && (
      <nav className="nav">
        <div className="links">
          {isMobile && (
          <Link
            to="/"
            style={{ textDecoration: 'none' }}
            onClick={(event) => handleLinkClick(event, '')}
          >
            <div className="logo-pop">
              <span>
                PSS Digital
              </span>
            </div>
          </Link>
          )}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button className={`item categories-item ${selectedCategory !== '' ? 'active-categories' : ''}`} type="button" onClick={toggleCategories}>
              <span className="icon"><AiOutlineBars /></span>
              <span className="text categories-button">
                Categories&nbsp;
                {arrow === 'down' ? (
                  <IoIosArrowDown className="arrow-icon" />
                ) : (
                  <IoIosArrowUp className="arrow-icon" />
                )}
              </span>
            </button>
          </Link>
          {showCategory && (
            <div
              className={`categories ${showCategory ? 'visible' : ''}`}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  dispatch(showCategories(true));
                }
              }}
              role="menu"
              tabIndex={0}
            >
              {categories.map((category) => (
                <>
                  <button
                    key={category.id}
                    className={
                      selectedCategory === category.name ? 'category active-two' : 'category'
                    }
                    onClick={() => toggleSubcategories(category.name)}
                    type="button"
                  >
                    {category.icon && <span className="icon">{category.icon}</span>}
                    <span className="text">{category.name}</span>
                  </button>

                  {showSubcategories && selectedCategory === category.name && (
                    <div className="subcategory-container">
                      <button
                        className="subcategory"
                        onClick={() => handleCategoryClick('Building Materials')}
                        type="button"
                      >
                        Building
                      </button>
                      <button
                        className="subcategory"
                        onClick={() => handleCategoryClick('Tools')}
                        type="button"
                      >
                        Tools
                      </button>
                      <button
                        className="subcategory"
                        onClick={() => handleCategoryClick('Plumbing')}
                        type="button"
                      >
                        Plumbing
                      </button>
                      <button
                        className="subcategory"
                        onClick={() => handleCategoryClick('Paint')}
                        type="button"
                      >
                        Paint
                      </button>
                      <button
                        className="subcategory"
                        onClick={() => handleCategoryClick('Electrical')}
                        type="button"
                      >
                        Electrical
                      </button>
                      <button
                        className="subcategory"
                        onClick={() => handleCategoryClick('General Materials')}
                        type="button"
                      >
                        General
                      </button>
                    </div>
                  )}
                </>
              ))}
            </div>
          )}
          <Link to="/" style={{ textDecoration: 'none' }} onClick={(event) => handleLinkClick(event, '')}>
            <div className={(pathname === '/' && selectedCategory === '') ? 'active' : 'item'}>
              <span className="icon"><RiHome3Fill /></span>
              <span className="text">Home</span>
            </div>
          </Link>
          <Link to="/ordering" style={{ textDecoration: 'none' }} onClick={(event) => handleLinkClick(event, 'ordering')}>
            <div className={(pathname === '/ordering') ? 'active' : 'item'}>
              <span className="icon"><FaShoppingCart /></span>
              <span className="text">My Orders</span>
            </div>
          </Link>
          {userState.data.role === 'admin' && (
            <Link
              to="/addproduct"
              style={{ textDecoration: 'none' }}
              onClick={(e) => {
                if (!userState.loggedIn || userState.data.role !== 'admin') {
                  e.preventDefault();
                }
                handleAddProductClick();
              }}
            >
              <div className={pathname === '/addproduct' ? 'active' : 'item'}>
                <span className="icon"><AiFillPlusCircle /></span>
                <span className="text">Add Product</span>
              </div>
            </Link>
          )}
        </div>
      </nav>
      )}
      {shouldShowLeftbar && (
        <div className="leftbar-footer">
          <Footer />
        </div>
      )}
    </div>
  );
};

LeftBar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleLinkClick: PropTypes.func.isRequired,
  handleHamburgerClick: PropTypes.func.isRequired,
};

export default LeftBar;
