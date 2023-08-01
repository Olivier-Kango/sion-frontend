import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import {
  FaShoppingCart, FaHome, FaIceCream, FaCheckCircle,
} from 'react-icons/fa';
import { MdDevices } from 'react-icons/md';
import { RiHome3Fill } from 'react-icons/ri';
import {
  GiNails, GiFire, GiWaterDrop, GiProcessor,
} from 'react-icons/gi';
import { AiFillPlusCircle, AiOutlineBars } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useMediaQuery } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Footer from '../footer/Footer';
import { userLogout } from '../../redux/users/users';
import { setSelectedCategory, showCategories, arrowDirection } from '../../redux/products/products';
import './Leftbar.scss';

const LeftBar = ({
  open, handleLinkClick, isAuthenticated, handleHamburgerClick,
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data?.name);
  const userState = useSelector((state) => state.user);
  const username = user?.charAt(0).toUpperCase() + user?.slice(1);
  const { pathname } = useLocation();
  const selectedCategory = useSelector((state) => state.products.selectedCategory);
  const showCategory = useSelector((state) => state.products.showCategories);
  const arrow = useSelector((state) => state.products.arrowDirection);
  const navigate = useNavigate();
  const [showAdminMessage, setShowAdminMessage] = useState(false);
  const [addProductClicked, setAddProductClicked] = useState(false);
  const [messageCounter, setMessageCounter] = useState(0);
  const isMobile = useMediaQuery('(max-width: 768px)');

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

    return undefined;
  }, [addProductClicked, userState, messageCounter]);

  const handleLogout = () => {
    dispatch(userLogout());
    navigate('/login-page');
  };

  const handleAddProductClick = () => {
    setAddProductClicked(true);
    setMessageCounter((prevCounter) => prevCounter + 1);
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
    { id: 1, name: 'Mineral Water', icon: <GiWaterDrop /> },
    { id: 2, name: 'Beverage Store', icon: <FaIceCream /> },
    { id: 3, name: 'Electronics', icon: <MdDevices /> },
    { id: 4, name: 'IT Services', icon: <GiProcessor /> },
    { id: 5, name: 'Gas Energy', icon: <GiFire /> },
    { id: 6, name: 'Real Estate', icon: <FaHome /> },
    { id: 7, name: 'Hardware Store', icon: <GiNails /> },
    { id: 8, name: 'Chickens', icon: <FaCheckCircle /> },
  ];

  return (
    <div className={`leftbar-container${open ? ' open' : ''}`}>
      <div className="leftbar-header">
        <Link to="/" style={{ textDecoration: 'none' }} onClick={(event) => handleLinkClick(event, '')}>
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
            <Link to="/login-page" style={{ textDecoration: 'none' }} onClick={(event) => handleLinkClick(event, 'login-page')}>
              <div className="user item">
                <span className="icon"><BsFillPersonFill /></span>
                <span className="font-normal text">Hello, Sign in</span>
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
                <button
                  key={category.id}
                  className={
                    selectedCategory === category.name ? 'category active-two' : 'category'
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
  handleHamburgerClick: PropTypes.func.isRequired,
};

export default LeftBar;
