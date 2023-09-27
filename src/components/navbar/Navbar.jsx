import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FiLogOut } from 'react-icons/fi';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  faSearch,
  faFolderOpen,
  faShoppingCart,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
import profilePic from '../../assets/profile-pic.jpeg';
import { userLogout } from '../../redux/users/users';
import { resultName, updateSearchResults, setSearchQuery } from '../../redux/products/products';
import './Navbar.scss';

const Navbar = ({ handleLinkClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const usern = useSelector((state) => state.user.data?.name);
  const products = useSelector((state) => state.products.products);
  const popupRef = useRef(null);
  const username = usern?.charAt(0).toUpperCase() + usern?.slice(1);
  const isAuthenticated = user.loggedIn;
  const [isPopupOpen, setPopupOpen] = useState(true);
  // const [searchPopupOpen, setSearchPopupOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const searchQuery = useSelector((state) => state.products.searchQuery);
  const { category, subcategory } = useParams();
  const selectedCategoryFromRedux = useSelector((state) => state.products.selectedCategory);
  const selectedSubcategoryFromRedux = useSelector((state) => state.products.selectedSubcategory);

  // State for search
  const [searchResults, setSearchResults] = useState([]);

  const selectedCategory = category?.split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ') || selectedCategoryFromRedux;
  const selectedSubcategory = subcategory?.split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ') || selectedSubcategoryFromRedux;

  const handleLogout = () => {
    dispatch(userLogout());
    navigate('/login-page');
  };

  const handlePopupClick = (e) => {
    e.stopPropagation();
  };

  const handleDocumentClick = (e) => {
    if (!popupRef.current?.contains(e.target)) {
      setSearchResults([]);
      setPopupOpen(true);
    }
  };

  const yourSearchFunction = (query) => {
    const filteredItems = products.filter((product) => {
      if (product && product.name) {
        return product.name.toLowerCase().includes(query.toLowerCase());
      }
      return false;
    });

    return filteredItems;
  };

  // Function to handle search
  const handleSearch = () => {
    const updatedSearchResults = yourSearchFunction(searchQuery);

    let filteredSearchResults = updatedSearchResults;

    if (selectedCategory) {
      filteredSearchResults = updatedSearchResults.filter(
        (result) => result.category === selectedCategory
          && (!selectedSubcategory || result.subcategory === selectedSubcategory),
      );
    }

    setSearchResults(filteredSearchResults);
    dispatch(updateSearchResults(filteredSearchResults));
  };

  // Effect to call handleSearch whenever searchQuery changes
  useEffect(() => {
    handleSearch();
  }, [searchQuery]);

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handlePortfolioClick = () => {
    window.location.href = 'https://olivier-kango.netlify.app/';
  };

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    dispatch(setSearchQuery(query));
    dispatch(resultName(''));
    if (query === '') {
      dispatch(resultName(''));
      setSearchResults([]);
    }
  };

  const handleResultClick = (resultNameValue) => {
    setSearchResults([]);
    dispatch(setSearchQuery(resultNameValue));
    dispatch(resultName(resultNameValue));
    setPopupOpen(true);
  };

  // Render search results
  const renderSearchResults = () => (
    <div className="search-results">
      {searchResults.map((result) => (
        <div
          key={result.id}
          className="search-result-item"
          onClick={() => handleResultClick(result.name)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleResultClick(result.name);
            }
          }}
          role="button"
          tabIndex={0}
        >
          { result.name }
        </div>
      ))}
    </div>
  );

  return (
    <div className="navbar">
      <div className="nav-first">
        <div className="navbar-header">
          <Link
            to="/"
            style={{ textDecoration: 'none' }}
            onClick={(event) => {
              handleLinkClick(event, '');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setPopupOpen(!isPopupOpen);
              }
            }}
          >
            <div className={!isMobile ? 'logo' : ''}>
              {!isMobile && (
                <span>
                  PSS Digital
                </span>
              )}
            </div>
          </Link>
        </div>
        <div className="navbar-search">
          <div className="search-icon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          {searchQuery && renderSearchResults(handleResultClick)}
        </div>
      </div>
      <div className="navbar-links">
        <Link to="/" onClick={handlePortfolioClick}>
          <div className="navbar-link">
            <FontAwesomeIcon icon={faFolderOpen} className="nav-icon" />
            <span className="text">Portfolio</span>
          </div>
        </Link>
        <Link to="/">
          <div className="navbar-link">
            <FontAwesomeIcon icon={faShoppingCart} className="nav-icon" />
            <span className="text">E-commerce</span>
          </div>
        </Link>
        <Link to="/management">
          <div className="navbar-link">
            <FontAwesomeIcon icon={faBriefcase} className="nav-icon" />
            <span className="text">Management</span>
          </div>
        </Link>
        <div className="header-profile">
          {isAuthenticated ? (
            <div
              className={`navbar-profile navbar-link ${isPopupOpen ? 'active' : ''}`}
            >
              <button
                className="profile-container"
                type="button"
                onClick={() => setPopupOpen(!isPopupOpen)}
                ref={popupRef}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setPopupOpen(!isPopupOpen);
                  }
                }}
              >
                <img src={profilePic} alt="Profile" />
              </button>
              {/* Popup */}
              {!isPopupOpen && (
                // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                <div
                  className="popup"
                  role="dialog"
                  onClick={handlePopupClick}
                  onKeyDown={(e) => e.stopPropagation()}
                >
                  <span className="text hello">{`Hello, ${username}`}</span>
                  <button
                    type="button"
                    className="item logout"
                    onClick={handleLogout}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleLogout();
                      }
                    }}
                  >
                    <span className="icon"><FiLogOut /></span>
                    <span className="text">Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <div className="navbar-profile navbar-link">
                <img src={profilePic} alt="Profile" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  handleLinkClick: PropTypes.func.isRequired,
};

export default Navbar;
