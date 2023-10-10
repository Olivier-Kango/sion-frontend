import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Management.scss';

const Management = () => {
  const user = useSelector((state) => state.user.data);
  const isAuthenticated = useSelector((state) => state.user.loggedIn);
  const products = useSelector((state) => state.products.products);

  const sortedProducts = [...products].sort((a, b) => {
    if (a.category === 'Hardware Store' && b.category !== 'Hardware Store') {
      return -1; // "Hardware Store" comes before other categories
    } if (a.category !== 'Hardware Store' && b.category === 'Hardware Store') {
      return 1; // "Hardware Store" comes after other categories
    } if (a.category === b.category) {
      return a.subcategory.localeCompare(b.subcategory);
    }
    return a.category.localeCompare(b.category);
  });

  return (
    <div className="project-management">
      {user.role === 'admin' ? (
        <div className="management">
          <h2 className="table-title">Product Information</h2>
          <table className="styled-table">
            <thead>
              <tr>
                <th>N°</th>
                <th>Name</th>
                <th>Image</th>
                <th>P.A.</th>
                <th>P.V.</th>
                <th>Gain</th>
                <th>Quantity</th>
                <th>Category</th>
                <th>Subcategory</th>
              </tr>
            </thead>
            <tbody>
              {sortedProducts.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td className="td-img"><img src={product.image} alt={product.name} /></td>
                  <td>{product.unit_purchase_price}</td>
                  <td>{product.unit_price}</td>
                  <td>{(product.unit_price - product.unit_purchase_price).toFixed(2)}</td>
                  <td>{product.quantity}</td>
                  <td>{product.category}</td>
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
