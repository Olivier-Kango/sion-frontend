import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API
// axios.defaults.baseURL = 'https://pss-digital-backend.onrender.com/';
axios.defaults.baseURL = 'http://[::1]:5000/';

// ACTION
export const addStockMovement = createAsyncThunk('ADD_STOCK_MOVEMENT', async (data) => {
  const response = await axios.post('/api/v1/stock_movements', data);
  return response.data;
});

// REDUCER
const initialState = {
  stockMovements: [],
};

const stockMovementReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_STOCK_MOVEMENT/fulfilled': {
      return {
        ...state,
        stockMovements: [...state.stockMovements, action.payload],
      };
    }
    default:
      return state;
  }
};

export default stockMovementReducer;
