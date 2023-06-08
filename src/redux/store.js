import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import throttle from 'lodash.throttle';

import { saveState, loadState } from '../local_storage/local_storage';
import reducerProduct from './products/products';
import orderReducer from './reducer/OrderReducer';
import userReducer from './users/users';

const rootReducer = combineReducers({
  orders: orderReducer,
  products: reducerProduct,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger, thunk],
  preloadedState: loadState(),
});

store.subscribe(
  throttle(() => {
    saveState({
      user: store.getState().user,
    });
  }, 1000),
);

export default store;
