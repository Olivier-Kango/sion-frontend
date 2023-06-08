import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://meal-master-backend.onrender.com/';

// Actions
export const getAllFoods = createAsyncThunk('GET_ALL_FOODS', async () => {
  const response = await axios.get('api/v1/foods');
  return response.data;
});

export const addFood = createAsyncThunk('ADD_FOOD', async (food) => {
  const response = await axios.post('api/v1/foods', food);
  return response.data;
});

export const deleteFood = createAsyncThunk('DELETE_FOOD', async (id) => {
  await axios.delete(`api/v1/foods/${id}`);
  return id;
});

// Reducers
const reducerFood = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_FOODS/fulfilled': {
      return action.payload;
    }
    case 'ADD_FOOD/fulfilled': {
      return [...state, action.payload];
    }
    case 'DELETE_FOOD/fulfilled': {
      return state.filter((f) => f.id !== action.payload);
    }
    default:
      return state;
  }
};

export default reducerFood;
