import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Footer from '../footer/Footer';
import { userLogout } from '../../redux/users/users';
import './Leftbar.scss';

const LeftBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data?.name);
  const username = user?.charAt(0).toUpperCase() + user?.slice(1);
  const { pathname } = useLocation();

  const handleLogout = () => {
    dispatch(userLogout());
  };

  return (
    <div className="leftbar-container">
      <div className="leftbar-header">
        <div className="logo">PSS Digital</div>
      </div>
      <nav className="nav">
        <div className="links">
          <div className="user">
            Hello
            <span className="font-semibold">{` ${username}`}</span>
            ✋🏼
          </div>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <div className={pathname === '/home' ? 'active' : 'item'}>
              <span>HOME</span>
            </div>
          </Link>
          <Link to="/ordering" style={{ textDecoration: 'none' }}>
            <div className={pathname === '/ordering' ? 'active' : 'item'}>
              <span>MY ORDERINGS</span>
            </div>
          </Link>
          <Link to="/addproduct" style={{ textDecoration: 'none' }}>
            <div className={pathname === '/addproduct' ? 'active' : 'item'}>
              <span>ADD PRODUCT</span>
            </div>
          </Link>
          <button
            type="button"
            className="item logout"
            onClick={() => handleLogout()}
          >
            LOGOUT
          </button>
        </div>
      </nav>
      <div className="leftbar-footer">
        <Footer />
      </div>
    </div>
  );
};

export default LeftBar;
