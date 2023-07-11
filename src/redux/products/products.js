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
const reducerProduct = (state = [
  {
    id: 47,
    name: 'Plastics Pure water 400ml (50 Pcs)',
    image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1687906937/Water-New-Packing-Style-330ml-400ml-500ml-PE-Plastic-Water-Pouch_ugfacs.webp',
    unit_price: 4,
    created_at: '2023-06-27T23:02:30.258Z',
    updated_at: '2023-06-27T23:02:30.258Z',
  },
  {
    id: 48,
    name: 'Pure water 500ml (Crt 24 Pcs)',
    image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1687907573/spc.t1.3.dp2.bouteille-eaudetoure_jb3kp1.jpg',
    unit_price: 4,
    created_at: '2023-06-27T23:13:57.498Z',
    updated_at: '2023-06-27T23:13:57.498Z',
  },
  {
    id: 49,
    name: 'Pure water 1.5L (Crt 12 Pcs)',
    image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1687908625/evian-fr-bottle-01_rr2pgw.jpg',
    unit_price: 7,
    created_at: '2023-06-27T23:32:06.494Z',
    updated_at: '2023-06-27T23:32:06.494Z',
  },
  {
    id: 51,
    name: 'Pure water 5 Litres',
    image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1687909300/bouteille-de-plastique-remplie-d-eau-potable-pure-isole-sur-le-fond-blanc-5-litres-rk5h9n_db7aip.jpg',
    unit_price: 2,
    created_at: '2023-06-27T23:41:56.020Z',
    updated_at: '2023-06-27T23:41:56.020Z',
  },
  {
    id: 52,
    name: 'Pure water 18.5 Litres',
    image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1687910085/ezgif.com-webp-to-jpg_2_sp4xer.jpg',
    unit_price: 10,
    created_at: '2023-06-27T23:55:11.426Z',
    updated_at: '2023-06-27T23:55:11.426Z',
  },
  {
    id: 53,
    name: 'Pure water 20 Litres',
    image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1687910575/ezgif.com-webp-to-jpg_3_sxx1ce.jpg',
    unit_price: 10,
    created_at: '2023-06-28T00:03:10.532Z',
    updated_at: '2023-06-28T00:03:10.532Z',
  },
], action) => {
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
