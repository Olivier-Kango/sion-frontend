import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

// Redux store
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store';

import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <Router>
        <App />
      </Router>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
);
