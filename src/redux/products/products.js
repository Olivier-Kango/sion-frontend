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
const reducerProduct = (state = [], action) => {
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
