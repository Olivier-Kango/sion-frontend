import React from 'react';
import './Navbar.scss';

const Navbar = () => (
  <div className="navbar">
    <div className="navbar-logo">
      <img src="logo.png" alt="Facebook Logo" />
    </div>
    <div className="navbar-search">
      <input type="text" placeholder="Search" />
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
