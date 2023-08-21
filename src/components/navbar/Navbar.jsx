import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
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
        <i className="fas fa-home" />
        Accueil
      </div>
      <div className="navbar-link">
        <i className="fas fa-users" />
        Amis
      </div>
      <div className="navbar-link">
        <i className="fas fa-comments" />
        Messages
      </div>
    </div>
    <div className="navbar-profile">
      <img src="profile-pic.jpg" alt="Profile" />
      <span>Nom utilisateur</span>
    </div>
  </div>
);

export default Navbar;
