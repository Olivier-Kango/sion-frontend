import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import ReactLoading from 'react-loading';
import { getAllFoods } from '../../redux/foods/foods';
import './Home.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Home = () => {
  const [, setSwiperRef] = useState(null);
  const [done, setDone] = useState(undefined);
  const [foo, setFoo] = useState([]);

  const dispatch = useDispatch();
  const foods = useSelector((state) => state.foods);

  useEffect(() => {
    if (foods.length === 0) {
      dispatch(getAllFoods());
    }
  }, [dispatch, foods]);

  useEffect(() => {
    setFoo(foods);
  }, [foods]);

  useEffect(() => {
    if (foo) {
      setDone(true);
    }
  }, [foo, foods]);

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
          <ReactLoading type="spokes" color="#a51c30ff" height={150} width={150} />
        </div>
      ) : (
        <div className="home-cont">
          <h2>OUR MEALS</h2>
          <p className="title-bar">Please select a meal</p>

          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={3}
            centeredSlides
            spaceBetween={20}
            navigation
            // pagination={{ clickable: true, type: 'bullets' }}
            scrollbar={{ draggable: true }}
            modules={[Pagination, Navigation]}
            style={{ display: foods.length === 0 ? 'unset' : 'flex' }}
          >
            {foods.length === 0 ? <span>You need to Add Food first!!!</span> : foods.map((food) => (
              <SwiperSlide key={food.id}>
                <Link to={`/fooddetails/${food.id}`}>
                  <img src={food.image} alt={food.name} />
                </Link>

                <div className="card-body">
                  <Link to={`/fooddetails/${food.id}`}>
                    <h2>{food.name}</h2>
                  </Link>
                  <div>
                    <p className="quantity">
                      Quantity:&nbsp;
                      {food.quantity}
                      &nbsp;pcs
                    </p>
                    <p>
                      Unit Price:&nbsp;
                      {food.unit_price}
                      &nbsp;$ (USD)
                    </p>
                    <Link to={`addorder/${food.id}`}>
                      <button type="button" className="button">
                        Order
                        {' '}
                        {food.name}
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Home;
