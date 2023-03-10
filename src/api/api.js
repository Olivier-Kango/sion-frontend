import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:5000/',
});

// axios.defaults.baseUrl = 'http://localhost:5000/';

export const fetchAllOrders = async () => {
  try {
    const response = await axios.get('api/v1/orders');
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};

// export const fetchSingleOrder = async (orderId) => {
//   try {
//     const response = await axios.get(`api/v1/orders/${orderId}`);
//     return response.data;
//   } catch (e) {
//     throw e.toString();
//   }
// };

export const fetchDeleteOrder = async (orderId) => {
  try {
    const response = await axios.delete(`api/v1/orders/${orderId}`);
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};
