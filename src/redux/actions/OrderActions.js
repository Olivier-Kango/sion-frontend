import { Actions } from '../constants/Constants';
import { fetchAllOrders, fetchDeleteOrder } from '../../api/api';
// import { fetchAllOrders, fetchSingleOrder, fetchDeleteOrder } from '../../api/api';

export const allOrders = () => async (dispatch) => {
  const orders = await fetchAllOrders();
  dispatch({ type: Actions.ALL_ORDERS, payload: orders });
};

// export const singleOrder = (orderid) => async (dispatch) => {
//   const order = await fetchSingleOrder(orderid);
//   dispatch({ type: Actions.SINGLE_ORDER, payload: order });
// };

export const deleteOrder = (orderid) => async (dispatch) => {
  const order = await fetchDeleteOrder(orderid);
  dispatch({ type: Actions.DELETE_ORDER, payload: order });
};
