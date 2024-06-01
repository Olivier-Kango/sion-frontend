import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API
axios.defaults.baseURL = 'https://pss-digital-backend.onrender.com/';
// axios.defaults.baseURL = 'http://[::1]:5000/';

// ACTIONS
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

export const modifyProduct = createAsyncThunk('MODIFY_PRODUCT', async ({ id, updatedProductData }) => {
  const response = await axios.put(`api/v1/products/${id}`, updatedProductData);
  const modifiedProduct = response.data;
  return modifiedProduct;
});

export const setSelectedCategory = (category) => ({
  type: 'SELECTED_CATEGORY',
  payload: category,
});

export const setSelectedSubcategory = (subcategory) => ({
  type: 'SELECTED_SUBCATEGORY',
  payload: subcategory,
});

export const showCategories = (show) => ({
  type: 'SHOW_CATEGORIES',
  payload: show,
});

export const arrowDirection = (arrow) => ({
  type: 'ARROW_DIRECTION',
  payload: arrow,
});

export const subarrowDirection = (subarrow) => ({
  type: 'SUBARROW_DIRECTION',
  payload: subarrow,
});

export const resultName = (resultName) => ({
  type: 'SET_SELECTED_PRODUCT',
  payload: resultName,
});

export const updateSearchResults = (results) => ({
  type: 'UPDATE_SEARCH_RESULTS',
  payload: results,
});

export const setSearchQuery = (query) => ({
  type: 'SET_SEARCH_QUERY',
  payload: query,
});

export const setShowLeftBar = (showLeftbar) => ({
  type: 'SET_SHOW_LEFTBAR',
  payload: showLeftbar,
});

// INITIAL STATE
const initialState = {
  selectedCategory: '',
  selectedSubcategory: '',
  showCategories: false,
  arrowDirection: 'down',
  subarrowDirection: 'right',
  resultName: '',
  results: [],
  searchQuery: '',
  showLeftBar: false,
  products: [{
    id: 171, name: 'Lampe 40W', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696861116/images_99_aufmlw.jpg', unit_price: '3.5', quantity: 2, category: 'Hardware Store', unit_purchase_price: '3.0', created_at: '2023-10-09T14:19:26.979Z', updated_at: '2023-10-09T14:20:46.271Z', subcategory: 'Electrical',
  }, {
    id: 86, name: 'Creation logos', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1709504677/logo_ampoule_new_light_engineering_png_u5wk02.png', unit_price: '100.0', quantity: 1, category: 'IT Services', unit_purchase_price: '100.0', created_at: '2024-03-03T22:24:59.537Z', updated_at: '2024-03-03T22:24:59.537Z', subcategory: 'IT Services',
  }, {
    id: 78, name: 'Powerbank Veger', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694487483/verger_fytsty.jpg', unit_price: '20.0', quantity: 2, category: 'Electronics', unit_purchase_price: '12.5', created_at: '2023-09-12T02:58:31.671Z', updated_at: '2024-02-03T02:35:22.105Z', subcategory: 'Telephony',
  }, {
    id: 185, name: 'Nails Technician ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1716373110/IMG_5256_gjzixy.jpg', unit_price: '3.0', quantity: 1, category: 'Hardware Store', unit_purchase_price: '3.0', created_at: '2024-05-22T10:20:14.027Z', updated_at: '2024-05-22T10:20:14.027Z', subcategory: 'General',
  },
  ],
};

// REDUCER
const reducerProduct = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_PRODUCTS/fulfilled': {
      return {
        ...state,
        products: action.payload,
      };
    }
    case 'ADD_PRODUCT/fulfilled': {
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    }
    case 'DELETE_PRODUCT/fulfilled': {
      return {
        ...state,
        products: state.products.filter((f) => f.id !== action.payload),
      };
    }
    case 'SELECTED_CATEGORY': {
      return {
        ...state,
        selectedCategory: action.payload,
      };
    }
    case 'SELECTED_SUBCATEGORY': {
      return {
        ...state,
        selectedSubcategory: action.payload,
      };
    }
    case 'SHOW_CATEGORIES': {
      return {
        ...state,
        showCategories: action.payload,
      };
    }
    case 'ARROW_DIRECTION': {
      return {
        ...state,
        arrowDirection: action.payload,
      };
    }
    case 'SUBARROW_DIRECTION': {
      return {
        ...state,
        subarrowDirection: action.payload,
      };
    }
    case 'SET_SELECTED_PRODUCT': {
      return {
        ...state,
        resultName: action.payload,
      };
    }
    case 'UPDATE_SEARCH_RESULTS': {
      return {
        ...state,
        results: action.payload,
      };
    }
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload,
      };
    case 'SET_SHOW_LEFTBAR':
      return {
        ...state,
        showLeftBar: action.payload,
      };
    default:
      return state;
  }
};

export default reducerProduct;
