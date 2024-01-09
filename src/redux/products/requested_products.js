import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API
// axios.defaults.baseURL = 'https://pss-digital-backend.onrender.com/';
axios.defaults.baseURL = 'http://[::1]:5000/';

// ACTION
export const addRequestedProducts = createAsyncThunk('ADD_REQUESTED_PRODUCTS', async (data) => {
  const response = await axios.post('/api/v1/requested_products', data);
  return response.data;
});

// REDUCER
const initialState = {
  requestedProducts: [],
};

const requestedProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_REQUESTED_PRODUCTS/fulfilled': {
      return {
        ...state,
        requestedProducts: [...state.requestedProducts, action.payload],
      };
    }
    default:
      return state;
  }
};

export default requestedProductsReducer;
