import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { getAllProducts, deleteProduct } from '../../redux/products/products';
import './Home.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Home = () => {
  const [, setSwiperRef] = useState(null);
  const [done, setDone] = useState(undefined);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const user = useSelector((state) => state.user.data);

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

  return (
    <div className="container">
      {!done ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
          }}
        >
          <p className="s">Please Add a Product</p>
        </div>
      ) : (
        <div className="home-cont">
          <h1>OUR PRODUCTS</h1>
          <p className="title-bar">Please select a Product</p>

          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={3.2}
            centeredSlides
            spaceBetween={20}
            navigation
            scrollbar={{ draggable: true }}
            modules={[Pagination, Navigation]}
            style={{ display: products.length === 0 ? 'unset' : 'flex' }}
          >
            {products.length === 0 ? (
              <span>Add Product first!!!</span>
            ) : (
              products.map((product) => (
                <SwiperSlide
                  key={product.id * Math.random(10000) + Math.random(5000)}
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
                      <Link to={`/addorder/${product.id}`}>
                        <button type="button" className="button">
                          Order
                          {' '}
                          {product.name}
                        </button>
                      </Link>
                      <br />
                      {user.role === 'admin' ? (
                        <button
                          type="button"
                          className="button"
                          onClick={() => {
                            handleDelete(product.id);
                          }}
                        >
                          Remove
                        </button>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Home;
