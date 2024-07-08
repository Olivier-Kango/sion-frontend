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

export const resetRequestCount = createAsyncThunk('RESET_REQUEST_COUNT', async ({ id, updatedRequestedProductData }) => {
  const response = await axios.patch(`api/v1/requested_products/${id}`, updatedRequestedProductData);
  return response.data;
});

// REDUCER
const initialState = {
  requestedProducts: [{
    id: 9, name: 'Ciment', request_count: 8, created_at: '2024-07-08T08:58:14.482Z', updated_at: '2024-07-08T09:01:30.795Z',
  }, {
    id: 19, name: 'Truelle', request_count: 4, created_at: '2024-07-08T09:03:32.568Z', updated_at: '2024-07-08T09:03:42.586Z',
  }, {
    id: 2, name: 'Tenaille', request_count: 4, created_at: '2024-07-08T08:56:40.581Z', updated_at: '2024-07-08T09:01:24.715Z',
  }, {
    id: 30, name: 'Super Glue', request_count: 4, created_at: '2024-07-08T09:07:02.400Z', updated_at: '2024-07-08T09:07:19.624Z',
  }, {
    id: 17, name: 'Ficelle', request_count: 4, created_at: '2024-07-08T09:03:04.266Z', updated_at: '2024-07-08T09:03:18.461Z',
  }, {
    id: 16, name: 'Triplex', request_count: 4, created_at: '2024-07-08T09:02:44.062Z', updated_at: '2024-07-08T09:02:56.731Z',
  }, {
    id: 12, name: 'Vernis', request_count: 3, created_at: '2024-07-08T09:01:06.957Z', updated_at: '2024-07-08T09:07:28.280Z',
  }, {
    id: 5, name: 'Col Freemaçon', request_count: 3, created_at: '2024-07-08T08:57:25.365Z', updated_at: '2024-07-08T08:57:29.699Z',
  }, {
    id: 8, name: 'Disjoncteur', request_count: 3, created_at: '2024-07-08T08:57:53.901Z', updated_at: '2024-07-08T08:58:02.927Z',
  }, {
    id: 14, name: 'Coude 63', request_count: 3, created_at: '2024-07-08T09:01:48.226Z', updated_at: '2024-07-08T09:02:02.068Z',
  }, {
    id: 15, name: 'Fils Elec || Panneau', request_count: 3, created_at: '2024-07-08T09:02:24.870Z', updated_at: '2024-07-08T09:02:35.788Z',
  }, {
    id: 20, name: 'PPR 3/4', request_count: 3, created_at: '2024-07-08T09:03:51.971Z', updated_at: '2024-07-08T09:04:00.329Z',
  }, {
    id: 26, name: 'Clous de Béton', request_count: 3, created_at: '2024-07-08T09:05:54.625Z', updated_at: '2024-07-08T09:06:00.315Z',
  }, {
    id: 28, name: 'Fer à Béton', request_count: 3, created_at: '2024-07-08T09:06:18.046Z', updated_at: '2024-07-08T09:06:25.005Z',
  }, {
    id: 29, name: "Equerre d'ajustage", request_count: 3, created_at: '2024-07-08T09:06:48.194Z', updated_at: '2024-07-08T09:06:53.856Z',
  }, {
    id: 3, name: 'Viserie (Lit)', request_count: 2, created_at: '2024-07-08T08:56:58.633Z', updated_at: '2024-07-08T08:57:01.004Z',
  }, {
    id: 21, name: 'Burin', request_count: 2, created_at: '2024-07-08T09:04:40.552Z', updated_at: '2024-07-08T09:04:46.955Z',
  }, {
    id: 11, name: 'Papier Merry Circulaire', request_count: 2, created_at: '2024-07-08T09:00:53.911Z', updated_at: '2024-07-08T09:00:59.173Z',
  }, {
    id: 10, name: 'Poignet Armoire', request_count: 2, created_at: '2024-07-08T08:59:04.541Z', updated_at: '2024-07-08T08:59:07.505Z',
  }, {
    id: 1, name: 'Etain', request_count: 2, created_at: '2024-07-08T08:56:32.084Z', updated_at: '2024-07-08T08:56:36.263Z',
  }, {
    id: 22, name: 'PVC 110', request_count: 2, created_at: '2024-07-08T09:04:58.999Z', updated_at: '2024-07-08T09:05:06.784Z',
  }, {
    id: 4, name: 'Col à Bois', request_count: 2, created_at: '2024-07-08T08:57:09.810Z', updated_at: '2024-07-08T08:57:12.573Z',
  }, {
    id: 7, name: 'Huile de Frein', request_count: 1, created_at: '2024-07-08T08:57:46.330Z', updated_at: '2024-07-08T08:57:46.330Z',
  }, {
    id: 18, name: 'Platresse', request_count: 1, created_at: '2024-07-08T09:03:26.172Z', updated_at: '2024-07-08T09:03:26.172Z',
  }, {
    id: 23, name: 'Gaudiot', request_count: 1, created_at: '2024-07-08T09:05:15.364Z', updated_at: '2024-07-08T09:05:15.364Z',
  }, {
    id: 24, name: 'Arrosoir', request_count: 1, created_at: '2024-07-08T09:05:20.718Z', updated_at: '2024-07-08T09:05:20.718Z',
  }, {
    id: 13, name: 'Robinet', request_count: 1, created_at: '2024-07-08T09:01:19.652Z', updated_at: '2024-07-08T09:01:19.652Z',
  }, {
    id: 27, name: 'Fer à Souder', request_count: 1, created_at: '2024-07-08T09:06:08.634Z', updated_at: '2024-07-08T09:06:08.634Z',
  }, {
    id: 6, name: 'PVC Elec', request_count: 1, created_at: '2024-07-08T08:57:36.279Z', updated_at: '2024-07-08T08:57:36.279Z',
  }],
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
      const { id } = action.payload;
      // eslint-disable-next-line max-len
      const updatedProducts = state.requestedProducts.map((product) => (product.id === id ? { ...product, request_count: product.request_count + 1 } : product));

      return {
        ...state,
        requestedProducts: updatedProducts,
      };
    }
    case 'RESET_REQUEST_COUNT/fulfilled': {
      const { id } = action.payload;
      // eslint-disable-next-line max-len
      const updatedProducts = state.requestedProducts.map((product) => (product.id === id ? { ...product, request_count: 0 } : product));

      return {
        ...state,
        requestedProducts: updatedProducts,
      };
    }
    default:
      return state;
  }
};

export default requestedProductsReducer;
