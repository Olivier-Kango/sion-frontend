import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Management.scss';

const Management = () => {
  const user = useSelector((state) => state.user.data);
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
                <th className="name">Name</th>
                <th className="td-img">Img</th>
                <th className="prix">P.A.</th>
                <th className="prix">P.V.</th>
                <th className="prix gain">Gn</th>
                <th className="quantity">Qté</th>
                <th className="cat">Category</th>
                <th className="cat">Subcategory</th>
              </tr>
            </thead>
            <tbody>
              {sortedProducts.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td className="name">{product.name}</td>
                  <td className="td-img"><img src={product.image} alt={product.name} /></td>
                  <td className="prix">{product.unit_purchase_price}</td>
                  <td className="prix">{product.unit_price}</td>
                  <td className="prix gain">{(product.unit_price - product.unit_purchase_price).toFixed(2)}</td>
                  <td className="quantity">{product.quantity}</td>
                  <td className="cat">{product.category}</td>
                  <td className="cat">{product.subcategory}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="warning">
          <h1>
            Accessing Management
          </h1>
          <p>
            To access management details, you need to be an admin.
            <br />
            Please, log out and then,
            {' '}
            <Link to="/login-page" className="login-manager">
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
