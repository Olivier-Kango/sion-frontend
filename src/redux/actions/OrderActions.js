import { Actions } from '../constants/Constants';
import { fetchAllOrders, fetchDeleteOrder } from '../../api/api';

export const allOrders = () => async (dispatch) => {
  const orders = await fetchAllOrders();
  dispatch({ type: Actions.ALL_ORDERS, payload: orders });
};

export const deleteOrder = (orderid) => async (dispatch) => {
  const order = await fetchDeleteOrder(orderid);
  dispatch({ type: Actions.DELETE_ORDER, payload: order });
};
