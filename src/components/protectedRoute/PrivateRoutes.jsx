import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Outlet,
  Navigate,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
// eslint-disable-next-line
import LeftBar from '../leftbar/Leftbar.jsx';
import {
  setSelectedCategory,
  showCategories,
  arrowDirection,
  subarrowDirection,
  resultName,
  updateSearchResults,
} from '../../redux/products/products';
import Navbar from '../navbar/Navbar';

import './PrivateRoutes.scss';

const PrivateRoutes = ({ isAllowed, children, redirectPath }) => {
  const [showLeftbar, setShowLeftbar] = useState(false);

  const isMobile = useMediaQuery('(max-width: 768px)');
  const user = useSelector((state) => state.user);
  const isAuthenticated = user.loggedIn;
  const selectedCategory = useSelector((state) => state.products.selectedCategory);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleHamburgerClick = () => {
    setShowLeftbar(!showLeftbar);
  };

  const handleLinkClick = (event, link) => {
    event.preventDefault();
    if (isMobile) {
      setShowLeftbar(false);
    }
    if (link === '' && selectedCategory !== '') {
      dispatch(setSelectedCategory(''));
    }
    navigate(`/${link}`);
    if (link === '') {
      dispatch(showCategories(false));
    }
    dispatch(arrowDirection('down'));
    dispatch(subarrowDirection('right'));

    console.log(updateSearchResults);
    dispatch(resultName(''));
  };

  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  const shouldShowLeftbar = location.pathname !== '/management';

  return (
    children || (
      <section className="page-container">
        <Navbar handleLinkClick={(event, link) => handleLinkClick(event, link)} />
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
              onClick={handleHamburgerClick}
              onKeyDown={handleHamburgerClick}
              role="button"
              tabIndex={0}
              aria-label="Close"
            />
            )}
            {showLeftbar
            && shouldShowLeftbar && (
            <LeftBar
              open={showLeftbar}
              handleLinkClick={(event, link) => handleLinkClick(event, link)}
              isAuthenticated={isAuthenticated}
              handleHamburgerClick={handleHamburgerClick}
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
