import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BiPencil, BiTrash } from 'react-icons/bi';
import { getAllProducts, deleteProduct } from '../../redux/products/products';
import Button from '../forms/Button/Button';
import './Home.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Home = () => {
  const [done, setDone] = useState(undefined);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  // const user = useSelector((state) => state.user.data);
  const isAuthenticated = useSelector((state) => state.user.loggedIn);
  const { category, subcategory } = useParams();

  const selectedCategoryFromRedux = useSelector((state) => state.products.selectedCategory);
  const selectedSubcategoryFromRedux = useSelector((state) => state.products.selectedSubcategory);
  const resultNameValue = useSelector((state) => state.products.resultName);
  const results = useSelector((state) => state.products.results);

  const selectedCategory = category?.split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ') || selectedCategoryFromRedux;
  const selectedSubcategory = subcategory?.split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ') || selectedSubcategoryFromRedux;

  const override = css`
  display: block;
  margin: 0 auto;
`;

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products.length > 0) {
      setDone(true);
    }
  }, [products]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  let filteredProducts = products;

  if (selectedCategory) {
    filteredProducts = products.filter(
      (product) => product.category === selectedCategory
        && (!selectedSubcategory || product.subcategory === selectedSubcategory),
    );
  } else if (results.length > 0) {
    const resultNames = results.map((result) => result.name);
    filteredProducts = products.filter((product) => resultNames.includes(product.name));
  }

  if (resultNameValue) {
    filteredProducts = filteredProducts.filter(
      (product) => product.name === resultNameValue,
    );
  }

  filteredProducts.sort((a, b) => {
    if (a && a.name && b && b.name) {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  return (
    <div className="container">
      {!done ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <RingLoader color="#123abc" css={override} size={200} />
          <p className="s">
            Please wait...
          </p>
        </div>
      ) : (
        <div className="home-cont">
          <h1>Our Products</h1>
          <p className="title-bar">Please select a Product</p>
          <div className="swiper">
            {filteredProducts.length === 0 ? (
              <span>Add Product first!!!</span>
            ) : (
              filteredProducts.map((product) => (
                <div
                  key={product.id * Math.random(10000) + Math.random(5000)}
                  className="swiper-slide"
                >
                  <Link to={`/productdetails/${product.id}`}>
                    <img src={product.image} alt={product.name} />
                  </Link>

                  <div className="card-body">
                    <Link to={`/productdetails/${product.id}`}>
                      <h2>{product.name}</h2>
                    </Link>
                    <div>
                      <p>
                        Price:&nbsp;
                        {product.unit_price}
                        &nbsp;$ (USD)
                      </p>
                      <br />
                      {/* {user.role === 'admin' ? ( */}
                      <div className="pencil-trash">
                        <Link to={`/modify-product/${product.id}`}>
                          <button
                            type="button"
                            className="button pencil"
                            style={{ color: 'black' }}
                          >
                            <BiPencil className="bi-icon" />
                          </button>
                        </Link>
                        <br />
                        <button
                          type="button"
                          className="button trash"
                          style={{ color: 'black' }}
                          onClick={() => {
                            handleDelete(product.id);
                          }}
                        >
                          <BiTrash className="bi-icon" />
                        </button>
                      </div>
                      {/* // ) : (
                      //   ''
                      // )} */}
                      <Link to={isAuthenticated ? `/addorder/${product.id}` : '/login-page'}>
                        <Button
                          state="default"
                          text="Order"
                          showIcon={false}
                          showText
                          size="medium" // medium | large | small | icon
                          variant="primary" // 'primary' | 'secondary' | 'subtle' | text
                          className="button"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
