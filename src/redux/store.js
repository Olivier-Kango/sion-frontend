import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducerFood from './foods/foods';
import orderReducer from './reducer/OrderReducer';

const rootReducer = combineReducers({
  orders: orderReducer,
  foods: reducerFood,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
