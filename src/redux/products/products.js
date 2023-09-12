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

// INITIAL STATE
const initialState = {
  selectedCategory: '',
  selectedSubcategory: '',
  showCategories: false,
  arrowDirection: 'down',
  subarrowDirection: 'right',
  products: [
    {
      id: 1,
      name: 'Cements',
      image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694242398/IMG_20230905_135152_676_qq2gy4.jpg',
      unit_price: 11.5,
      created_at: '2023-07-17T21:08:57.574Z',
      updated_at: '2023-07-17T21:08:57.574Z',
      quantity: 200,
      category: 'Hardware Store',
    },
    {
      id: 2,
      name: 'Powerbank Veger',
      image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694487483/verger_fytsty.jpg',
      unit_price: 15,
      created_at: '2023-07-17T20:59:12.646Z',
      updated_at: '2023-07-17T20:59:12.646Z',
      quantity: 10,
      category: 'Electronics',
    },
    {
      id: 3,
      name: 'Mineral Water Sion',
      image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694488121/profil_svjrhj.jpg',
      unit_price: 10,
      created_at: '2023-07-17T21:05:43.018Z',
      updated_at: '2023-07-17T21:05:43.018Z',
      quantity: 10,
      category: 'Mineral Water',
    },
    {
      id: 4,
      name: 'Crème glacée',
      image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694488762/creme_dlkpwg.jpg',
      unit_price: 0.25,
      created_at: '2023-07-17T21:05:43.018Z',
      updated_at: '2023-07-17T21:05:43.018Z',
      quantity: 1,
      category: 'Beverage Store',
    },
    {
      id: 5,
      name: 'Build a Web Site',
      image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694489466/porfolio_olk_yuglzb.png',
      unit_price: 2000,
      created_at: '2023-07-17T21:05:43.018Z',
      updated_at: '2023-07-17T21:05:43.018Z',
      quantity: 1,
      category: 'IT Services',
    },
    {
      id: 6,
      name: 'Gas Stove',
      image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694490075/stove_ivhhxs.jpg',
      unit_price: 12,
      created_at: '2023-07-17T21:07:09.954Z',
      updated_at: '2023-07-17T21:07:09.954Z',
      quantity: 1,
      category: 'Gas Energy',
    },
    {
      id: 84,
      name: 'House 2',
      image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1689628101/1-perspective-1688964722_rkya71.jpg',
      unit_price: 200,
      created_at: '2023-07-17T21:08:35.890Z',
      updated_at: '2023-07-17T21:08:35.890Z',
      quantity: 1,
      category: 'Real Estate',
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
    default:
      return state;
  }
};

export default reducerProduct;
