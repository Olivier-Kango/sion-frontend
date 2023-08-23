import React from 'react';
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

const Navbar = () => (
  <div className="navbar">
    <div className="navbar-header">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="logo">PSS Digital</div>
      </Link>
    </div>
    <div className="navbar-search">
      <div className="search-icon">
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input type="text" placeholder="Search for a product" />
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
    </div>
    <div className="navbar-profile">
      <img src={profilePic} alt="Profile" />
      <span className="text">Nom utilisateur</span>
    </div>
  </div>
);

export default Navbar;
