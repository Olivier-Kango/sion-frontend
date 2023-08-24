import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faSearch,
  faFolderOpen,
  faShoppingCart,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import profilePic from '../../assets/profile-pic.jpeg';
import './Navbar.scss';

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const usern = useSelector((state) => state.user.data?.name);
  const username = usern?.charAt(0).toUpperCase() + usern?.slice(1);
  const isAuthenticated = user.loggedIn;

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
          <div className="navbar-profile navbar-link">
            <img src={profilePic} alt="Profile" />
            <span className="text">{`Hello, ${username}`}</span>
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
