import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/';

// Actions
export const getAllFoods = createAsyncThunk('GET_ALL_FOODS', async () => {
  const response = await axios.get('api/v1/foods');
  return response.data;
});

// Reducers
const reducerFood = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_FOODS/fulfilled': {
      const newFoods = action.payload.filter((food) => !state.some((f) => f.id === food.id));
      return [...state, ...newFoods];
    }

    default:
      return state;
  }
};

export default reducerFood;
