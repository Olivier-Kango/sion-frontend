import { Outlet, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import LeftBar from '../leftbar/LeftBar';
import './PrivateRoutes.scss';

const PrivateRoutes = ({ loggedIn }) => {
  const TOKEN = localStorage.getItem('JWT_TOKEN');
  if (loggedIn === false || TOKEN === 'null' || !TOKEN) {
    return <Navigate to="/login" />;
  }
  return (
    <section className="page-container">
      <LeftBar />
      <div className="home">
        <Outlet />
      </div>
    </section>
  );
};

PrivateRoutes.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default PrivateRoutes;
