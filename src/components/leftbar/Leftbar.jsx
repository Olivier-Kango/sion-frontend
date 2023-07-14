import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import {
  FaShoppingCart,
  FaWater,
  FaTools,
  FaHome,
  FaGasPump,
} from 'react-icons/fa';
import { RiHome3Fill, RiDeviceFill } from 'react-icons/ri';
import { AiFillPlusCircle, AiOutlineBars } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Footer from '../footer/Footer';
import { userLogout } from '../../redux/users/users';
import './Leftbar.scss';

const LeftBar = ({ open, handleLinkClick, isAuthenticated }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data?.name);
  const userState = useSelector((state) => state.user);
  const username = user?.charAt(0).toUpperCase() + user?.slice(1);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [showAdminMessage, setShowAdminMessage] = useState(false);
  const [addProductClicked, setAddProductClicked] = useState(false);
  const [messageCounter, setMessageCounter] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showCategories, setShowCategories] = useState(false);
  const [arrowDirection, setArrowDirection] = useState('down');

  useEffect(() => {
    if (addProductClicked && (!userState.loggedIn || userState.data.role !== 'admin')) {
      setShowAdminMessage(true);
      const timer = setTimeout(() => {
        setShowAdminMessage(false);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }

    if (messageCounter > 0) {
      setShowAdminMessage(false);
    }

    // If the condition is not met, return undefined
    return undefined;
  }, [addProductClicked, userState, messageCounter]);

  const handleLogout = () => {
    dispatch(userLogout());
    navigate('/login-page');
  };

  const handleAddProductClick = () => {
    setAddProductClicked(true);
    setMessageCounter((prevCounter) => prevCounter + 1);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowCategories(false);
    // Implement your filtering logic here based on the selected category
    // You can update the state or call a function in
    // your home page component to handle the filtering
  };

  const toggleCategories = () => {
    setShowCategories(!showCategories);
    setArrowDirection(arrowDirection === 'down' ? 'up' : 'down');
  };

  const categories = [
    { name: 'Select product\'s Category', icon: null },
    { name: 'Mineral Water', icon: <FaWater /> },
    { name: 'Electronics', icon: <RiDeviceFill /> },
    { name: 'Gas Energy', icon: <FaGasPump /> },
    { name: 'House Rental', icon: <FaHome /> },
    { name: 'Hardware Store', icon: <FaTools /> },
  ];

  return (
    <div className={`leftbar-container${open ? ' open' : ''}`}>
      <div className="leftbar-header">
        <Link to="/" style={{ textDecoration: 'none' }} onClick={handleLinkClick}>
          <div className="logo">PSS Digital</div>
        </Link>
      </div>
      <nav className="nav">
        <div className="links">
          {isAuthenticated ? (
            <div className="user item">
              <span className="icon"><BsFillPersonFill /></span>
              <span className="font-normal text">{`Hello, ${username}`}</span>
            </div>
          ) : (
            <Link to="/login-page" style={{ textDecoration: 'none' }} onClick={handleLinkClick}>
              <div className="user item">
                <span className="icon"><BsFillPersonFill /></span>
                <span className="font-normal text">Hello, Sign in</span>
              </div>
            </Link>
          )}
          <button className="item" onClick={toggleCategories} type="button">
            <span className="icon"><AiOutlineBars /></span>
            <span className="text categories-button">
              Categories&nbsp;
              {arrowDirection === 'down' ? (
                <IoIosArrowDown className="arrow-icon" />
              ) : (
                <IoIosArrowUp className="arrow-icon" />
              )}
            </span>
          </button>
          {showCategories && (
            <div className="categories">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={
                    selectedCategory === category.name ? 'category active' : 'category'
                  }
                  onClick={() => handleCategoryClick(category.name)}
                  type="button"
                >
                  {category.icon && <span className="icon">{category.icon}</span>}
                  <span className="text">{category.name}</span>
                </button>
              ))}
            </div>
          )}
          <Link to="/" style={{ textDecoration: 'none' }} onClick={handleLinkClick}>
            <div className={pathname === '/' ? 'active' : 'item'}>
              <span className="icon"><RiHome3Fill /></span>
              <span className="text">Home</span>
            </div>
          </Link>
          <Link to="/ordering" style={{ textDecoration: 'none' }} onClick={handleLinkClick}>
            <div className={pathname === '/ordering' ? 'active' : 'item'}>
              <span className="icon"><FaShoppingCart /></span>
              <span className="text">My Orders</span>
            </div>
          </Link>
          <Link
            to={userState.data.role === 'admin' && '/addproduct'}
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
          {showAdminMessage && (
            <div style={{ color: 'red', paddingLeft: '12px' }}>
              You need to be an admin
              <br />
              to add a product.
            </div>
          )}
          {isAuthenticated && (
          <button
            type="button"
            className="item logout"
            onClick={() => handleLogout()}
          >
            <span className="icon"><FiLogOut /></span>
            <span className="text">Logout</span>
          </button>
          )}
        </div>
      </nav>
      <div className="leftbar-footer">
        <Footer />
      </div>
    </div>
  );
};

LeftBar.propTypes = {
  open: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  handleLinkClick: PropTypes.func.isRequired,
};

export default LeftBar;
