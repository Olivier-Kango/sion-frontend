import React, { useState } from 'react';
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import {
  FaShoppingCart, FaHome, FaIceCream, FaProductHunt, FaRegListAlt, FaCouch,
} from 'react-icons/fa';
import { FaWheatAwn } from 'react-icons/fa6';
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
import {
  setSelectedCategory,
  setSelectedSubcategory,
  showCategories,
  arrowDirection,
  subarrowDirection,
} from '../../redux/products/products';
import sion from '../../assets/sion-logo.png';
import './Leftbar.scss';

const LeftBar = (props) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const { pathname } = useLocation();
  const selectedCategory = useSelector((state) => state.products.selectedCategory);
  const selectedSubcategory = useSelector((state) => state.products.selectedSubcategory);
  const showCategory = useSelector((state) => state.products.showCategories);
  const arrow = useSelector((state) => state.products.arrowDirection);
  const subarrow = useSelector((state) => state.products.subarrowDirection);
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const location = useLocation();
  const [showSubcategories, setShowSubcategories] = useState(false);
  const { category, subcategory } = useParams();
  const {
    open,
    handleLinkClick,
    handleHamburgerClick,
    handleLinkManag,
  } = props;

  const handleAddProductClick = () => {
    navigate('/addproduct');
    dispatch(setSelectedCategory(''));
    dispatch(setSelectedSubcategory(''));
    dispatch(arrowDirection('down'));
    dispatch(subarrowDirection('right'));
    dispatch(showCategories(false));
  };

  const toggleCategories = () => {
    dispatch(showCategories(!showCategory));
    dispatch(arrowDirection(showCategory ? 'down' : 'up'));
  };

  const handleCategoryClick = (category, subcategory = '') => {
    dispatch(setSelectedCategory(category));
    dispatch(setSelectedSubcategory(subcategory));

    if (isMobile && subcategory !== '') {
      handleHamburgerClick();
    }
    if (subcategory) {
      navigate(`/${category.toLowerCase().replace(/ /g, '-')}/${subcategory.toLowerCase().replace(/ /g, '-')}`);
    } else {
      navigate(`/${category.toLowerCase().replace(/ /g, '-')}`);
    }
  };

  const categories = [
    { id: 1, name: 'Hardware Store', icon: <GiNails /> },
    { id: 2, name: 'Mineral Water', icon: <GiWaterDrop /> },
    { id: 3, name: 'Beverage Store', icon: <FaIceCream /> },
    { id: 4, name: 'Electronics', icon: <MdDevices /> },
    { id: 5, name: 'IT Services', icon: <GiProcessor /> },
    { id: 6, name: 'Gas Energy', icon: <GiFire /> },
    { id: 7, name: 'Real Estate', icon: <FaHome /> },
    { id: 8, name: 'Agri Food', icon: <FaWheatAwn /> },
    { id: 9, name: 'Home Deco', icon: <FaCouch /> },
  ];

  const subcategories = [
    { id: 1, name: 'Building' },
    { id: 2, name: 'Tools' },
    { id: 3, name: 'Plumbing' },
    { id: 4, name: 'Paint' },
    { id: 5, name: 'Electrical' },
    { id: 6, name: 'Cleaning' },
    { id: 7, name: 'General' },
  ];

  const shouldShowLeftbar = location.pathname !== '/management' && location.pathname !== '/requested_products';

  const toggleSubcategories = (categoryName) => {
    if (categoryName === 'Hardware Store') {
      setShowSubcategories(!showSubcategories);
    } else {
      setShowSubcategories(false);
      if (isMobile) {
        handleHamburgerClick();
      }
    }
    handleCategoryClick(categoryName);
    dispatch(subarrowDirection(showSubcategories ? 'right' : 'up'));
  };

  return (
    <div className={`leftbar-container${open ? ' open' : ''}`}>
      {shouldShowLeftbar ? (
        <nav className="nav">
          <div
            className="links"
          >
            {isMobile && (
            <Link
              to="/"
              style={{ textDecoration: 'none' }}
              onClick={(event) => handleLinkClick(event, '')}
            >
              <div className="logo-pop">
                <span>
                  <img src={sion} alt="sion" className="sion-logo" />
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
                    {' '}
                    {category.name === 'Hardware Store' && (
                      subarrow === 'right' ? (
                        <IoIosArrowDown className="arrow-icon" />
                      ) : (
                        <IoIosArrowUp className="arrow-icon" />
                      )
                    )}
                  </button>

                  {showSubcategories && selectedCategory === category.name && (
                    <div className="subcategory-container">
                      {subcategories.map((subcategory) => (
                        <button
                          key={subcategory.id}
                          className={
                            selectedSubcategory === subcategory.name ? 'subcategory active-two' : 'subcategory'
                          }
                          onClick={() => handleCategoryClick('Hardware Store', `${subcategory.name}`)}
                          type="button"
                        >
                          {subcategory.name}
                        </button>
                      ))}
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
            {subcategory || category ? (
              <Link to={`/${category}/${subcategory}`} onClick={() => handleCategoryClick(category, subcategory)}>
                {/* {subcategory || category} */}
              </Link>
            ) : null}
            <Link to="/ordering" style={{ textDecoration: 'none' }} onClick={(event) => handleLinkClick(event, 'ordering')}>
              <div className={(pathname === '/ordering') ? 'active' : 'item'}>
                <span className="icon"><FaShoppingCart /></span>
                <span className="text">Cart</span>
              </div>
            </Link>
            {userState.data.role === 'admin' && (
            <Link
              to="/addproduct"
              style={{ textDecoration: 'none' }}
              onClick={(e) => {
                if (!userState.loggedIn || userState.data.role === 'admin') {
                  e.preventDefault();
                }
                handleAddProductClick();
              }}
            >
              <div
                className={pathname === '/addproduct' ? 'active' : 'item'}
              >
                <span className="icon"><AiFillPlusCircle /></span>
                <span className="text">Add Product</span>
              </div>
            </Link>
            )}
          </div>
        </nav>
      ) : (
        <nav className="nav">
          <div
            className="links"
          >
            {isMobile && (
            <Link
              to="/"
              style={{ textDecoration: 'none' }}
              onClick={(event) => handleLinkClick(event, '')}
            >
              <div className="logo-pop">
                <span>
                  <img src={sion} alt="sion" className="sion-logo" />
                </span>
              </div>
            </Link>
            )}
            <Link to="/management" style={{ textDecoration: 'none' }} onClick={handleLinkManag}>
              <div className={(pathname === '/' && selectedCategory === '') ? 'active' : 'item'}>
                <span className="icon"><FaProductHunt /></span>
                <span className="text">Product Information</span>
              </div>
            </Link>
            <Link to="/requested_products" style={{ textDecoration: 'none' }} onClick={handleLinkManag}>
              <div className={(pathname === '/' && selectedCategory === '') ? 'active' : 'item'}>
                <span className="icon"><FaRegListAlt /></span>
                <span className="text">Requested Products</span>
              </div>
            </Link>
          </div>
        </nav>
      )}
      <div className="leftbar-footer">
        <Footer />
      </div>
    </div>
  );
};

LeftBar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleLinkClick: PropTypes.func.isRequired,
  handleLinkManag: PropTypes.func.isRequired,
  handleHamburgerClick: PropTypes.func.isRequired,
};

export default LeftBar;
