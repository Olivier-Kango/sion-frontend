import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducerFood from './foods/foods';

const rootReducer = combineReducers({
  // food: reducerSingleFood,
  // orders: reducerOrder,
  // order: reducerSingleOrder,
  foods: reducerFood,
  // newFood: reducerAddFood,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
