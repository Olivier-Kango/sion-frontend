import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faSearch,
  faHome,
  faShoppingCart,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import './Navbar.scss';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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
        <Link
          to="/"
          className={`navbar-link ${activeTab === 'Home' ? 'active' : ''}`}
          onClick={() => handleTabClick('Home')}
          aria-label="Home"
        >
          <FontAwesomeIcon icon={faHome} />
          <span>Home</span>
        </Link>
        <Link
          to="/e-commerce"
          className={`navbar-link ${activeTab === 'E-commerce' ? 'active' : ''}`}
          onClick={() => handleTabClick('E-commerce')}
          aria-label="E-commerce"
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>E-commerce</span>
        </Link>
        <Link
          to="/business-management"
          className={`navbar-link ${activeTab === 'Management' ? 'active' : ''}`}
          onClick={() => handleTabClick('Management')}
          aria-label="Business Management"
        >
          <FontAwesomeIcon icon={faBriefcase} />
          <span>Business Management</span>
        </Link>
      </div>
      <div className="navbar-profile">
        <img src="profile-pic.jpg" alt="Profile" />
        <span>Nom utilisateur</span>
      </div>
    </div>;
};

export default Navbar;
