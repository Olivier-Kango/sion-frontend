import { Actions } from '../constants/Constants';

const initiaState = {
  orders: [],
  order: {},
};

const orderReducer = (state = initiaState, { type, payload }) => {
  if (type === Actions.ALL_ORDERS) {
    return {
      ...state,
      orders: [payload],
    };
  }

  if (type === Actions.SINGLE_ORDER) {
    return {
      ...state,
      order: payload,
    };
  }

  if (type === Actions.DELETE_ORDER) {
    return {
      ...state,
      order: payload,
    };
  }
  return state;
};

export default orderReducer;
