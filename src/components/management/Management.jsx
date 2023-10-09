import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Management.scss';

const Management = () => {
  const user = useSelector((state) => state.user.data);
  const isAuthenticated = useSelector((state) => state.user.loggedIn);

  return (
    <div className="project-management">
      {user.role === 'admin' ? (
        <div className="pencil-trash">
          Welcome Admin
        </div>
      ) : (
        <>
          <h1>
            Accessing Management Details
          </h1>
          <p>
            To access management details, you need to be an admin.
            <br />
            Please
            {' '}
            <Link to={isAuthenticated && '/login-page'} className="login-manager">
              click here
            </Link>
            {' '}
            to log in
          </p>
        </>
      )}
    </div>
  );
};

export default Management;
