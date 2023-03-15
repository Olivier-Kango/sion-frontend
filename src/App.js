import React from 'react';
import { useSelector } from 'react-redux';
// Routers
import { Routes, Route } from 'react-router-dom';
import './App.scss';

// Components
import AddFood from './components/food/AddFood';
import FoodDetails from './components/food/FoodDetails';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Home from './components/home/Home';
import Ordering from './components/ordering/Ordering';
import AddOrder from './components/ordering/AddOrder';
import Footer from './components/footer/Footer';
import PrivateRoutes from './components/protectedRoute/PrivateRoutes';

// pages
import Splash from './pages/Splash';

const App = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route element={<PrivateRoutes isAllowed={!!user.loggedIn} redirectPath="/login" />}>
          <Route path="/home" element={<Home />} />
          <Route path="/fooddetails/:id" element={<FoodDetails />} />
          <Route path="/ordering" element={<Ordering />} />
          <Route path="/addorder/:id" element={<AddOrder />} />
          <Route path="/footer" element={<Footer />} />
        </Route>

        <Route
          path="/addfood"
          element={
           (
             <PrivateRoutes
               redirectPath="/home"
               isAllowed={!!user.loggedIn && user.role === 'admin'}
             >
               <AddFood />
             </PrivateRoutes>
            )
          }
        />
      </Routes>
    </div>
  );
};

export default App;
