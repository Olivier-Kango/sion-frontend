import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://pss-digital-backend.onrender.com/';
axios.defaults.baseURL = 'http://[::1]:5000/';

// Actions
export const getAllProducts = createAsyncThunk('GET_ALL_PRODUCTS', async () => {
  const response = await axios.get('api/v1/products');
  return response.data;
});

export const addProduct = createAsyncThunk('ADD_PRODUCT', async (product) => {
  const response = await axios.post('api/v1/products', product);
  return response.data;
});

export const deleteProduct = createAsyncThunk('DELETE_PRODUCT', async (id) => {
  await axios.delete(`api/v1/products/${id}`);
  return id;
});

// Reducers
const reducerProduct = (state = [{
  id: 37,
  name: 'Powerbank Veger',
  image: 'https://m.media-amazon.com/images/I/51wyGCP1MzL._AC_SY879_.jpg',
  unit_price: 15,
  created_at: '2023-06-16T23:24:56.397Z',
  updated_at: '2023-06-16T23:24:56.397Z',
}, {
  id: 38,
  name: 'Techno Camon 12 Pro',
  image: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Camon_12_Air_back.jpg',
  unit_price: 150,
  created_at: '2023-06-16T23:25:21.005Z',
  updated_at: '2023-06-16T23:25:21.005Z',
}, {
  id: 40,
  name: 'Lenovo Thinkpad T470s',
  image: 'https://m.media-amazon.com/images/I/61bhgF7v9WL.jpg',
  unit_price: 400,
  created_at: '2023-06-16T23:26:07.229Z',
  updated_at: '2023-06-16T23:26:07.229Z',
}, {
  id: 41,
  name: 'Macbook Air 2020',
  image: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/19834492/awhite_200319_3944_6.0.jpg',
  unit_price: 1000,
  created_at: '2023-06-16T23:26:32.074Z',
  updated_at: '2023-06-16T23:26:32.074Z',
}], action) => {
  switch (action.type) {
    case 'GET_ALL_PRODUCTS/fulfilled': {
      return action.payload;
    }
    case 'ADD_PRODUCT/fulfilled': {
      return [...state, action.payload];
    }
    case 'DELETE_PRODUCT/fulfilled': {
      return state.filter((f) => f.id !== action.payload);
    }
    default:
      return state;
  }
};

export default reducerProduct;
