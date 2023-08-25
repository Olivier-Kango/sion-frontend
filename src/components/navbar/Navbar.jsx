import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import {
  faSearch,
  faFolderOpen,
  faShoppingCart,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import profilePic from '../../assets/profile-pic.jpeg';
import { userLogout } from '../../redux/users/users';
import './Navbar.scss';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const usern = useSelector((state) => state.user.data?.name);
  const username = usern?.charAt(0).toUpperCase() + usern?.slice(1);
  const isAuthenticated = user.loggedIn;
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleLogout = () => {
    dispatch(userLogout());
    navigate('/login-page');
  };

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
    console.log('Popup Open:', !isPopupOpen);
  };

  const handlePopupClick = (e) => {
    e.stopPropagation(); // Prevents click on popup from propagating to document
  };

  const handleDocumentClick = () => {
    if (isPopupOpen) {
      setPopupOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isPopupOpen]);

  return (
    <div className="navbar">
      <div className="nav-first">
        <div className="navbar-header">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="logo">PSS Digital</div>
          </Link>
        </div>
        <div className="navbar-search">
          <div className="search-icon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="navbar-links">
        <div className="navbar-link">
          <FontAwesomeIcon icon={faFolderOpen} className="nav-icon" />
          <span className="text">Portfolio</span>
        </div>
        <div className="navbar-link">
          <FontAwesomeIcon icon={faShoppingCart} className="nav-icon" />
          <span className="text">E-commerce</span>
        </div>
        <div className="navbar-link">
          <FontAwesomeIcon icon={faBriefcase} className="nav-icon" />
          <span className="text">B-Management</span>
        </div>
        {isAuthenticated ? (
          <div
            className={`navbar-profile navbar-link ${isPopupOpen ? 'active' : ''}`}
          >
            <button
              className="profile-container"
              type="button"
              onClick={togglePopup}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  togglePopup();
                }
              }}
            >
              <img src={profilePic} alt="Profile" />
              <span className="text">{`Hello, ${username}`}</span>
            </button>
            {/* Popup */}
            {isPopupOpen && (
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
              <div
                className="popup"
                role="dialog"
                onClick={handlePopupClick}
                onKeyDown={(e) => e.stopPropagation()}
              >
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
                  <span className="text">Logout</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login-page" style={{ textDecoration: 'none' }}>
            <div className="navbar-profile navbar-link">
              <img src={profilePic} alt="Profile" />
              <span className="text">Hello, Sign in</span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
