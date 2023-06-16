import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { BiUser } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { RiHome3Fill } from 'react-icons/ri';
// import { IoMdAddCircleOutline } from 'react-icons/io';
import { AiFillPlusCircle } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Footer from '../footer/Footer';
import { userLogout } from '../../redux/users/users';
import './Leftbar.scss';

const LeftBar = ({ open, handleLinkClick, isAuthenticated }) => {
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
        <Link to="/" style={{ textDecoration: 'none' }} onClick={handleLinkClick}>
          <div className="logo">PSS Digital</div>
        </Link>
      </div>
      <nav className="nav">
        <div className="links">
          {isAuthenticated ? (
            <div className="user item">
              <span className="icon"><BsFillPersonFill /></span>
              <span className="font-normal text">{`Hello, ${username}`}</span>
            </div>
          ) : (
            <Link to="/login-page" style={{ textDecoration: 'none' }} onClick={handleLinkClick}>
              <div className="user item">
                <span className="icon"><BsFillPersonFill /></span>
                <span className="font-normal text">Hello, Sign in</span>
              </div>
            </Link>
          )}
          <Link to="/" style={{ textDecoration: 'none' }} onClick={handleLinkClick}>
            <div className={pathname === '/' ? 'active' : 'item'}>
              <span className="icon"><RiHome3Fill /></span>
              <span className="text">Home</span>
            </div>
          </Link>
          <Link to="/ordering" style={{ textDecoration: 'none' }} onClick={handleLinkClick}>
            <div className={pathname === '/ordering' ? 'active' : 'item'}>
              <span className="icon"><FaShoppingCart /></span>
              <span className="text">My Orders</span>
            </div>
          </Link>
          <Link to="/addproduct" style={{ textDecoration: 'none' }} onClick={handleLinkClick}>
            <div className={pathname === '/addproduct' ? 'active' : 'item'}>
              <span className="icon"><AiFillPlusCircle /></span>
              <span className="text">Add Product</span>
            </div>
          </Link>
          <button
            type="button"
            className="item logout"
            onClick={() => handleLogout()}
          >
            <span className="icon"><FiLogOut /></span>
            <span className="text">Logout</span>
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
  isAuthenticated: PropTypes.bool.isRequired,
  handleLinkClick: PropTypes.func.isRequired,
};

export default LeftBar;
