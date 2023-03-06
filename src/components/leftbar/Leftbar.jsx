import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../footer/Footer';
import './Leftbar.scss';

const Leftbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="leftbar-container">
      <div className="leftbar-header">
        <div className="logo">
          Logo
        </div>
      </div>
      <nav className="nav">
        <div className="links">
          <div className="user">
            USER_NAME
          </div>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div className={(pathname === '/') ? 'active' : 'item'}>
              <span>HOME</span>
            </div>
          </Link>
          <Link to="/food" style={{ textDecoration: 'none' }}>
            <div className={(pathname === '/food') ? 'active' : 'item'}>
              <span>FOODS</span>
            </div>
          </Link>
          <Link to="/ordering" style={{ textDecoration: 'none' }}>
            <div className={(pathname === '/ordering') ? 'active' : 'item'}>
              <span>MY ORDERINGS</span>
            </div>
          </Link>
          <Link to="/addfood" style={{ textDecoration: 'none' }}>
            <div className={(pathname === '/addfood') ? 'active' : 'item'}>
              <span>ADD FOOD</span>
            </div>
          </Link>
          <div className="item logout">LOGOUT</div>
        </div>
      </nav>
      <div className="leftbar-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Leftbar;
