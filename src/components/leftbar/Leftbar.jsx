import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Footer from '../footer/Footer';
import { userLogout } from '../../redux/users/users';
import './Leftbar.scss';

const LeftBar = ({ open, handleLinkClick }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data?.name);
  const username = user?.charAt(0).toUpperCase() + user?.slice(1);
  const { pathname } = useLocation();

  const handleLogout = () => {
    dispatch(userLogout());
  };

  return (
    <div className={`leftbar-container${open ? ' open' : ''}`}>
      <div className="leftbar-header">
        <div className="logo">PSS Digital</div>
      </div>
      <nav className="nav">
        <div className="links">
          <div className="user">
            Jambo,
            <span className="font-semibold">{` ${username}`}</span>
          </div>
          <Link to="/home" style={{ textDecoration: 'none' }} onClick={handleLinkClick}>
            <div className={pathname === '/home' ? 'active' : 'item'}>
              <span>Home</span>
            </div>
          </Link>
          <Link to="/ordering" style={{ textDecoration: 'none' }} onClick={handleLinkClick}>
            <div className={pathname === '/ordering' ? 'active' : 'item'}>
              <span>My Orders</span>
            </div>
          </Link>
          <Link to="/addproduct" style={{ textDecoration: 'none' }} onClick={handleLinkClick}>
            <div className={pathname === '/addproduct' ? 'active' : 'item'}>
              <span>Add Product</span>
            </div>
          </Link>
          <button
            type="button"
            className="item logout"
            onClick={() => handleLogout()}
          >
            Logout
          </button>
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
  handleLinkClick: PropTypes.func.isRequired,
};

export default LeftBar;
