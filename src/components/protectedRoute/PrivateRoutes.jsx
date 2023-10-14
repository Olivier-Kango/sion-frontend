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

  const [isSwiping, setIsSwiping] = useState(false);
  const [startX, setStartX] = useState(null);

  // const isManagement = location.pathname === '/management';

  useEffect(() => {
    if (isSwiping) {
      setShowLeftBar(false);
    }
  }, [isSwiping, dispatch]);

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

  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  // const shouldShowLeftbar = location.pathname !== '/management';

  const handleTouchStart = (e) => {
    const { clientX } = e.touches[0];
    setStartX(clientX);
  };

  const handleTouchMove = (e) => {
    if (startX !== null) {
      const deltaX = startX - e.touches[0].clientX;
      if (deltaX > 5) {
        setIsSwiping(true);
        dispatch(setShowLeftBar(false));
      }
    }
  };

  const handleTouchEnd = () => {
    setStartX(null);
    setIsSwiping(false);
  };

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (startX !== null) {
      const deltaX = startX - e.clientX;
      if (deltaX > 5) {
        setIsSwiping(true);
        dispatch(setShowLeftBar(false));
      }
    }
  };

  const handleMouseUp = () => {
    setStartX(null);
    setIsSwiping(false);
  };

  return (
    children || (
      <section
        // className={`page-container ${(isManagement && !isMobile) ? 'grid-remove' : ''}`}
        className="page-container"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...(isMobile && showLeftbar && {
          role: 'button',
          tabIndex: 0,
          onTouchStart: handleTouchStart,
          onTouchMove: handleTouchMove,
          onTouchEnd: handleTouchEnd,
          onMouseDown: handleMouseDown,
          onMouseMove: handleMouseMove,
          onMouseUp: handleMouseUp,
        })}
      >
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
            {showLeftbar && (
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
