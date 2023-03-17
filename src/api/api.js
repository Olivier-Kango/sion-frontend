import axios from 'axios';

export default axios.create({
  baseURL: 'https://meal-master-backend.onrender.com/',
});

export const fetchAllOrders = async () => {
  try {
    const response = await axios.get('api/v1/orders');
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};

export const fetchDeleteOrder = async (orderId) => {
  try {
    const response = await axios.delete(`api/v1/orders/${orderId}`);
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};

export const fetchAddOrder = async (order) => {
  try {
    const response = await axios.post('api/v1/orders', { order });
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};
