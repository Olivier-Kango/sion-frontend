import axios from 'axios';

axios.defaults.baseUrl = 'http://localhost:5000/';

export const fetchAllOrders = async () => {
  try {
    const response = await axios.get('api/v1/foods');
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};

export const fetchSingleOrder = async () => {
  try {
    const response = await axios.get('api/v1/foods/1');
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};
