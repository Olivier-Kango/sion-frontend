import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogout } from '../../redux/users/users';
import './Management.scss';

const Management = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.data);
  const products = useSelector((state) => state.products.products);

  const sortedProducts = [...products].sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  const handleLogout = () => {
    dispatch(userLogout());
    navigate('/login-page');
  };

  return (
    <div className="project-management">
      {user.role === 'admin' ? (
        <div className="management">
          <h2 className="table-title">Product Information</h2>
          <table className="styled-table">
            <thead>
              <tr>
                <th className="num">No.</th>
                <th className="name">Name</th>
                <th className="td-img">Img</th>
                <th className="prix">P.P.</th>
                <th className="prix vente">S.P.</th>
                <th className="prix gain">Pft</th>
                <th className="quantity">Qty</th>
                <th className="cat">Category</th>
                <th className="cat">Subcategory</th>
              </tr>
            </thead>
            <tbody>
              {sortedProducts.map((product, index) => (
                <tr key={product.id}>
                  <td className="num">{index + 1}</td>
                  <td className="name">{product.name}</td>
                  <td className="td-img"><img src={product.image} alt={product.name} /></td>
                  <td className="prix">{product.unit_purchase_price}</td>
                  <td className="prix vente">{product.unit_price}</td>
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
            Accessing Product Information
          </h1>
          <p>
            To Access Product Information, you need to be an admin.
            <br />
            <br />
            Please,
            {' '}
            <span
              role="button"
              tabIndex={0}
              className="login-manager"
              onClick={handleLogout}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleLogout();
                }
              }}
            >
              click here
            </span>
            {' '}
            to log in
          </p>
        </div>
      )}
    </div>
  );
};

export default Management;
