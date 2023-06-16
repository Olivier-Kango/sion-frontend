import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getAllProducts } from '../../redux/products/products';
import './Product.scss';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const product = products.find((f) => f.id === parseInt(id, 10));
  const isAuthenticated = useSelector((state) => state.user.loggedIn);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getAllProducts());
    }
  }, [dispatch, products]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <div className="product-details-img">
        <img src={product?.image} className="img-details" alt={product?.name} />
        <div className="button-container">
          <Link to="/" className="link-back">&lt;</Link>
        </div>
      </div>
      <div className="product-details-body">
        <div>
          <h1>
            {product?.name}
          </h1>
          <br />
          <p>
            <span>
              Price
            </span>
            <span>
              {' '}
              {product?.unit_price}
              {' '}
              $
            </span>
          </p>
          <p>
            <span>
              Manufactured at
            </span>
            <span>
              {' '}
              {product?.created_at.slice(0, 10)}
            </span>
          </p>
          <p>
            <span>
              Manufactured on
            </span>
            <span>
              {' '}
              {product?.created_at.slice(11, 16)}
            </span>
          </p>
        </div>
        <Link to={isAuthenticated ? `/addorder/${product.id}` : '/login-page'}>
          <button type="button" className="button-order">
            Order Product
          </button>
        </Link>
      </div>
    </div>

  );
};

export default ProductDetails;
