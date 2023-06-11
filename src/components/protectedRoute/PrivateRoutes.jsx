import { Outlet, Navigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
// eslint-disable-next-line
import LeftBar from '../leftbar/Leftbar.jsx';

import './PrivateRoutes.scss';

const PrivateRoutes = ({ isAllowed, children, redirectPath }) => {
  const TOKEN = localStorage.getItem('JWT_TOKEN');
  const isMobile = useMediaQuery('(max-width: 768px)');
  if (!isAllowed || TOKEN === 'null' || !TOKEN) {
    return <Navigate to={redirectPath} replace />;
  }
  return (
    children || (
      <section className="page-container">
        {!isMobile && <LeftBar />}
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
