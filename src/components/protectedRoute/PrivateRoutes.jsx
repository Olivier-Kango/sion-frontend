import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
// eslint-disable-next-line
import LeftBar from '../leftbar/Leftbar.jsx';

import './PrivateRoutes.scss';

const PrivateRoutes = ({ isAllowed, children, redirectPath }) => {
  const TOKEN = localStorage.getItem('JWT_TOKEN');
  const [showLeftbar, setShowLeftbar] = useState(false);
  const handleHamburgerClick = () => {
    setShowLeftbar(!showLeftbar);
  };

  const handleLinkClick = () => {
    setShowLeftbar(false);
  };

  const isMobile = useMediaQuery('(max-width: 768px)');
  const user = useSelector((state) => state.user);
  const isAuthenticated = user.loggedIn;

  if (!isAllowed || TOKEN === 'null' || !TOKEN) {
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
              handleLinkClick={handleLinkClick}
              isAuthenticated={isAuthenticated}
            />
            )}
          </>
        ) : (
          <LeftBar isAuthenticated={isAuthenticated} />
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
