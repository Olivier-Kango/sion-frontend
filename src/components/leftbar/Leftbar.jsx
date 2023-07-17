import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsFillPersonFill, BsHouse } from 'react-icons/bs';
import {
  FaShoppingCart,
} from 'react-icons/fa';
import { MdDevices } from 'react-icons/md';
import { RiHome3Fill } from 'react-icons/ri';
import { GiNails, GiFire, GiWaterDrop } from 'react-icons/gi';
import { AiFillPlusCircle, AiOutlineBars } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Footer from '../footer/Footer';
import { userLogout } from '../../redux/users/users';
import { setSelectedCategory } from '../../redux/products/products';
import './Leftbar.scss';

const LeftBar = ({
  open, handleLinkClick, isAuthenticated,
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data?.name);
  const userState = useSelector((state) => state.user);
  const username = user?.charAt(0).toUpperCase() + user?.slice(1);
  const { pathname } = useLocation();
  const selectedCategory = useSelector((state) => state.products.selectedCategory);
  const navigate = useNavigate();
  const [showAdminMessage, setShowAdminMessage] = useState(false);
  const [addProductClicked, setAddProductClicked] = useState(false);
  const [messageCounter, setMessageCounter] = useState(0);
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
    dispatch(setSelectedCategory(category));
  };

  const toggleCategories = () => {
    setShowCategories(!showCategories);
    setArrowDirection(showCategories ? 'down' : 'up');
  };

  const categories = [
    { id: 1, name: 'Mineral Water', icon: <GiWaterDrop /> },
    { id: 2, name: 'Electronics', icon: <MdDevices /> },
    { id: 3, name: 'Gas Energy', icon: <GiFire /> },
    { id: 4, name: 'House Rental', icon: <BsHouse /> },
    { id: 5, name: 'Hardware Store', icon: <GiNails /> },
  ];

  return (
    <div className={`leftbar-container${open ? ' open' : ''}`}>
      <div className="leftbar-header">
        <Link to="/" style={{ textDecoration: 'none' }} onClick={(event) => handleLinkClick(event, 'Home')}>
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
            <Link to="/login-page" style={{ textDecoration: 'none' }} onClick={(event) => handleLinkClick(event, '')}>
              <div className="user item">
                <span className="icon"><BsFillPersonFill /></span>
                <span className="font-normal text">Hello, Sign in</span>
              </div>
            </Link>
          )}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button className={`item categories-item ${selectedCategory !== '' ? 'active-categories' : ''}`} onClick={toggleCategories} type="button">
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
          </Link>
          {showCategories && (
            <div
              className={`categories ${showCategories ? 'visible' : ''}`}
              onClick={(event) => handleLinkClick(event, '')}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  setShowCategories(false);
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
          <Link to="/" style={{ textDecoration: 'none' }} onClick={(event) => handleLinkClick(event, 'Home')}>
            <div className={(pathname === '/' && selectedCategory === '') ? 'active' : 'item'}>
              <span className="icon"><RiHome3Fill /></span>
              <span className="text">Home</span>
            </div>
          </Link>
          <Link to="/ordering" style={{ textDecoration: 'none' }} onClick={(event) => handleLinkClick(event, 'My Orders')}>
            <div className={(pathname === '/ordering' && selectedCategory === '') ? 'active' : 'item'}>
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
