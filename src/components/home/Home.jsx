import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { getAllFoods, deleteFood } from '../../redux/foods/foods';
import './Home.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Home = () => {
  const [, setSwiperRef] = useState(null);
  const [done, setDone] = useState(undefined);

  const dispatch = useDispatch();
  const foods = useSelector((state) => state.foods);
  const user = useSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(getAllFoods());
  }, [dispatch]);

  useEffect(() => {
    if (foods.length > 0) {
      setDone(true);
    }
  }, [foods]);

  const handleDelete = (id) => {
    dispatch(deleteFood(id));
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
          <p className="s">Please Add a Food</p>
        </div>
      ) : (
        <div className="home-cont">
          <h1>OUR MEALS</h1>
          <p className="title-bar">Please select a meal</p>

          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={4}
            centeredSlides
            spaceBetween={20}
            navigation
            scrollbar={{ draggable: true }}
            modules={[Pagination, Navigation]}
            style={{ display: foods.length === 0 ? 'unset' : 'flex' }}
          >
            {foods.length === 0 ? (
              <span>Add Food first!!!</span>
            ) : (
              foods.map((food) => (
                <SwiperSlide
                  key={food.id * Math.random(10000) + Math.random(5000)}
                >
                  <Link to={`/fooddetails/${food.id}`}>
                    <img src={food.image} alt={food.name} />
                  </Link>

                  <div className="card-body">
                    <Link to={`/fooddetails/${food.id}`}>
                      <h2>{food.name}</h2>
                    </Link>
                    <div>
                      <p>
                        Price:&nbsp;
                        {food.unit_price}
                        &nbsp;$ (USD)
                      </p>
                      <Link to={`/addorder/${food.id}`}>
                        <button type="button" className="button">
                          Order
                          {food.name}
                        </button>
                      </Link>
                      {user.role === 'admin' ? (
                        <button
                          type="button"
                          className="button"
                          onClick={() => {
                            handleDelete(food.id);
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
