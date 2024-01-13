import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API
axios.defaults.baseURL = 'https://pss-digital-backend.onrender.com/';
// axios.defaults.baseURL = 'http://[::1]:5000/';

// ACTION
export const getAllRequestedProducts = createAsyncThunk('GET_ALL_REQUESTED_PRODUCTS', async () => {
  const response = await axios.get('api/v1/requested_products');
  return response.data;
});

export const addRequestedProducts = createAsyncThunk('ADD_REQUESTED_PRODUCTS', async (data) => {
  const response = await axios.post('/api/v1/requested_products', data);
  return response.data;
});

export const deleteRequestedProduct = createAsyncThunk('DELETE_REQUESTED_PRODUCT', async (id) => {
  await axios.delete(`api/v1/requested_products/${id}`);
  return id;
});

export const modifyProduct = createAsyncThunk('MODIFY_REQUESTED_PRODUCT', async ({ id, updatedRequestedProductData }) => {
  const response = await axios.put(`api/v1/requested_products/${id}`, updatedRequestedProductData);
  const modifiedRequestedProduct = response.data;
  return modifiedRequestedProduct;
});

export const incrementRequestCount = createAsyncThunk('INCREMENT_REQUEST_COUNT', async ({ id, updatedRequestedProductData }) => {
  const response = await axios.patch(`api/v1/requested_products/${id}`, updatedRequestedProductData);
  return response.data;
});

// REDUCER
const initialState = {
  requestedProducts: [],
};

const requestedProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_REQUESTED_PRODUCTS/fulfilled': {
      return {
        ...state,
        requestedProducts: action.payload,
      };
    }
    case 'ADD_REQUESTED_PRODUCT/fulfilled': {
      return {
        ...state,
        requestedProducts: [...state.requestedProducts, action.payload],
      };
    }
    case 'DELETE_REQUESTED_PRODUCT/fulfilled': {
      return {
        ...state,
        requestedProducts: state.requestedProducts.filter((f) => f.id !== action.payload),
      };
    }
    case 'INCREMENT_REQUEST_COUNT/fulfilled': {
      return {
        ...state,
        // eslint-disable-next-line max-len
        requestedProducts: state.requestedProducts.map((product) => (product.id === action.payload.id
          ? { ...product, request_count: product.request_count + 1 }
          : product)),
      };
    }
    default:
      return state;
  }
};

export default requestedProductsReducer;
