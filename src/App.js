import React from 'react';
import { useSelector } from 'react-redux';
// Routers
import { Routes, Route } from 'react-router-dom';
import './App.scss';

// Components
import AddProduct from './components/product/AddProduct';
import ProductDetails from './components/product/ProductDetails';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Home from './components/home/Home';
import Ordering from './components/ordering/Ordering';
import AddOrder from './components/ordering/AddOrder';
import Footer from './components/footer/Footer';
import PrivateRoutes from './components/protectedRoute/PrivateRoutes';
import LeftBar from './components/leftbar/Leftbar';
import RequestedProduct from './components/product/RequestedProduct';
import Slides from './components/slides/Slides';

// pages
import Splash from './pages/Splash';
import Management from './components/management/Management';
import StockMovement from './components/stockMovement/stockMovement';
import ModifyProduct from './components/product/ModifyProduct';

const App = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="App">
      <Routes>
        <Route path="/login-page" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route
          element={
            <PrivateRoutes isAllowed redirectPath="/login-page" />
          }
        >
          <Route path="/management" element={<Management />} />
          <Route path="/stock-movement" element={<StockMovement />} />
          <Route path="/requested_products" element={<RequestedProduct />} />
          <Route path="/" element={<Home />} />
          <Route path="/:category/:subcategory?" element={<Home />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/ordering" element={<Ordering />} />
          <Route path="/addorder/:id" element={<AddOrder />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/slides" element={<Slides />} />
        </Route>

        <Route
          path="/addproduct"
          element={
            (
              <PrivateRoutes
                redirectPath="/"
                isAllowed={!!user.loggedIn && user.data.role === 'admin'}
              >
                <section className="page-container">
                  <LeftBar isAuthenticated={!!user.loggedIn} />
                  <AddProduct />
                </section>
              </PrivateRoutes>
            )
          }
        />

        <Route
          path="/modify-product/:id"
          element={
            (
              <PrivateRoutes
                redirectPath="/"
                isAllowed={!!user.loggedIn && user.data.role === 'admin'}
              >
                <section className="page-container">
                  <LeftBar isAuthenticated={!!user.loggedIn} />
                  <ModifyProduct />
                </section>
              </PrivateRoutes>
            )
          }
        />
      </Routes>
    </div>
  );
};

export default App;
