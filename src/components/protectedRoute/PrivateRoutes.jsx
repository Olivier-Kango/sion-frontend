import React, { useEffect, useState } from 'react';
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
  updateSearchResults,
  setSearchQuery,
  resultName,
  getAllProducts,
  setShowLeftBar,
} from '../../redux/products/products';
import Navbar from '../navbar/Navbar';

import './PrivateRoutes.scss';

const PrivateRoutes = ({ isAllowed, children, redirectPath }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const user = useSelector((state) => state.user);
  const isAuthenticated = user.loggedIn;
  const selectedCategory = useSelector((state) => state.products.selectedCategory);
  const showLeftbar = useSelector((state) => state.products.showLeftBar);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    setShowLeftBar(showLeftbar);
  }, [showLeftbar]);

  const handleHamburgerClick = () => {
    dispatch(setShowLeftBar(!showLeftbar));
  };

  const handleSearch = () => {
    dispatch(updateSearchResults([]));
  };

  const handleLinkClick = (event, link) => {
    event.preventDefault();
    if (isMobile) {
      dispatch(setShowLeftBar(false));
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

    handleSearch();
    dispatch(setSearchQuery(''));
    dispatch(resultName(''));
    dispatch(getAllProducts());
  };

  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleSwipe = () => {
    const minSwipeDistance = 50;

    if (touchEndX - touchStartX > minSwipeDistance) {
      dispatch(setShowLeftBar(false));
    }
  };

  const handleTouchEnd = (e) => {
    setTouchEndX(e.changedTouches[0].clientX);
    handleSwipe();
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
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
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
