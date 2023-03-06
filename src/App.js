import React from 'react';
// Routers
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Food from './components/food/Food';
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
  <div className="App">
    <Leftbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/food" element={<Food />} />
      <Route path="/addfood" element={<AddFood />} />
      <Route path="/fooddetails" element={<FoodDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/ordering" element={<Ordering />} />
      <Route path="/addorder" element={<AddOrder />} />
      <Route path="/footer" element={<Footer />} />
    </Routes>
  </div>
);

export default App;
