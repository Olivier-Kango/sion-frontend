import { Actions } from '../constants/Constants';
import { fetchAllOrders, fetchDeleteOrder, fetchAddOrder } from '../../api/api';

export const allOrders = () => async (dispatch) => {
  const orders = await fetchAllOrders();
  dispatch({ type: Actions.ALL_ORDERS, payload: orders });
};

export const deleteOrder = (orderid) => async (dispatch) => {
  const order = await fetchDeleteOrder(orderid);
  dispatch({ type: Actions.DELETE_ORDER, payload: order });
};

export const addOrder = (order) => async (dispatch) => {
  const permittedOrder = {
    quantity: order.quantity,
    delivery_point: order.delivery_point,
    food_id: order.food_id,
    user_id: order.user_id,
  };
  const addedOrder = await fetchAddOrder(permittedOrder);
  dispatch({ type: Actions.ADD_ORDER, payload: addedOrder });
  return addedOrder;
};
