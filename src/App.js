import React from 'react';
// Routers
import { Routes, Route } from 'react-router-dom';
import './App.scss';

// Redux store
import { Provider } from 'react-redux';
import store from './redux/store';

// Components
import AddFood from './components/food/AddFood';
import FoodDetails from './components/food/FoodDetails';
import Leftbar from './components/leftbar/Leftbar';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Home from './components/home/Home';
import Ordering from './components/ordering/Ordering';
import AddOrder from './components/ordering/AddOrder';
import Footer from './components/footer/Footer';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Leftbar />
      <div className="home">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addfood" element={<AddFood />} />
          <Route path="/fooddetails/:id" element={<FoodDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ordering" element={<Ordering />} />
          <Route path="/addorder/:id" element={<AddOrder />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
    </div>
  </Provider>
);

export default App;
