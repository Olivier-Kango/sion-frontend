import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
// eslint-disable-next-line
import LeftBar from '../leftbar/Leftbar.jsx';
import { setSelectedCategory } from '../../redux/products/products';

import './PrivateRoutes.scss';

const PrivateRoutes = ({ isAllowed, children, redirectPath }) => {
  const [showLeftbar, setShowLeftbar] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const user = useSelector((state) => state.user);
  const isAuthenticated = user.loggedIn;
  const selectedCategory = useSelector((state) => state.products.selectedCategory);
  const dispatch = useDispatch();

  const handleHamburgerClick = () => {
    setShowLeftbar(!showLeftbar);
  };

  const handleLinkClick = (event, link) => {
    event.preventDefault();
    if (isMobile) {
      setShowLeftbar(false);
    }
    if (link === 'Home' && selectedCategory !== '') {
      dispatch(setSelectedCategory(''));
    }
  };

  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return (
    children || (
      <section className="page-container">
        {isMobile ? (
          <>
            <div
              className={`hamburger-button${showLeftbar ? ' open' : ''}`}
              onClick={handleHamburgerClick}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleHamburgerClick();
                }
              }}
              role="button"
              tabIndex={0}
            >
              <span />
              <span />
              <span />
            </div>
            {showLeftbar
            && (
            <div
              className="overlay"
              onClick={handleLinkClick}
              onKeyDown={handleLinkClick}
              role="button"
              tabIndex={0}
              aria-label="Close"
            />
            )}
            {showLeftbar
            && (
            <LeftBar
              open={showLeftbar}
              handleLinkClick={(event, link) => handleLinkClick(event, link)}
              isAuthenticated={isAuthenticated}
            />
            )}
          </>
        ) : (
          <LeftBar
            isAuthenticated={isAuthenticated}
            handleLinkClick={(event, link) => handleLinkClick(event, link)}
          />
        )}
        <div className="home">
          <Outlet />
        </div>
      </section>
    )
  );
};

/* eslint-disable */
PrivateRoutes.propTypes = {
  isAllowed: PropTypes.bool.isRequired,
  children: PropTypes.node,
  redirectPath: PropTypes.string,
};

export default PrivateRoutes;
