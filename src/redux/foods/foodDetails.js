import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/';

// Actions
export const getFoodDetails = createAsyncThunk('GET_FOOD_DETAILS', async (payload) => {
  const response = await axios.get(`api/v1/foods/${payload}`);
  return response.data;
});

// Reducers
const singleFoodReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_FOOD_DETAILS/fulfilled': {
      const foodDetails = action.payload;
      return foodDetails;
    }

    default:
      return state;
  }
};

export default singleFoodReducer;
