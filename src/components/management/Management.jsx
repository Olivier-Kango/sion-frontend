import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Management.scss';

const Management = () => {
  const user = useSelector((state) => state.user.data);
  const isAuthenticated = useSelector((state) => state.user.loggedIn);
  const products = useSelector((state) => state.products.products);

  return (
    <div className="project-management">
      {user.role === 'admin' ? (
        <div className="management">
          <h2 className="table-title">Products Information</h2>
          <table className="styled-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Image</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Category</th>
                <th>Unit Purchase Price</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Subcategory</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td><img src={product.image} alt={product.name} /></td>
                  <td>{product.unit_price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.category}</td>
                  <td>{product.unit_purchase_price}</td>
                  <td>{product.created_at}</td>
                  <td>{product.updated_at}</td>
                  <td>{product.subcategory}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="warning">
          <h1>
            Accessing Management Details
          </h1>
          <p>
            To access management details, you need to be an admin.
            <br />
            Please
            {' '}
            <Link to={!isAuthenticated && '/login-page'} className="login-manager">
              click here
            </Link>
            {' '}
            to log in
          </p>
        </div>
      )}
    </div>
  );
};

export default Management;
