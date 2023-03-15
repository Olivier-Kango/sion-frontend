import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// URLs
const LOGIN_URL = 'http://127.0.0.1:5000/login';
const LOGOUT_URL = 'http://127.0.0.1:5000/logout';
const SIGNUP_URL = 'http://127.0.0.1:5000/signup';
const CURRENT_USER_URL = 'http://127.0.0.1:5000/api/v1/current_user';

// action strings
const USER_LOGIN = 'users/userLogin';
const USER_LOGOUT = 'users/userLogout';
const USER_SIGNUP = 'users/userSignup';
const GET_CURRENT_USER = 'users/getCurrentUser';

// async actions helper
const userAuth = async (url, userInfoData) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(userInfoData),
  });

  localStorage.setItem('JWT_TOKEN', response.headers.get('Authorization'));
  const data = await response.json();
  return data;
};

// async actions

const userLogin = createAsyncThunk(USER_LOGIN, async (userInfoData) => {
  const data = await userAuth(LOGIN_URL, userInfoData);
  return data;
});

const userSignup = createAsyncThunk(USER_SIGNUP, async (userInfoData) => {
  const data = await userAuth(SIGNUP_URL, userInfoData);
  return data;
});

const userLogout = createAsyncThunk(USER_LOGOUT, async () => {
  const resp = await fetch(LOGOUT_URL, {
    method: 'DELETE',
    headers: {
      authorization: localStorage.getItem('JWT_TOKEN'),
    },
  });
  const data = await resp.json();
  if (data.status === 200) {
    localStorage.removeItem('JWT_TOKEN');
  }
  return data;
});

const getCurrentUser = createAsyncThunk(GET_CURRENT_USER, async () => {
  const resp = await fetch(CURRENT_USER_URL, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      authorization: localStorage.getItem('JWT_TOKEN'),
    },
  });
  const data = await resp.json();
  return data;
});

const initialState = {
  error: {
    'login-error': '',
    'logout-error': '',
    'signup-error': '',
  },
  loggedIn: false,
  data: {},
};

// User Reducer
const usersSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      if (action.payload.status?.code === 200) {
        return {
          ...state,
          loggedIn: true,
          data: action.payload.data,
        };
      }
      return {
        ...state,
        error: {
          ...state.error,
          'login-error': action.payload.status?.message || action.payload.error,
        },
      };
    });
    builder.addCase(userLogout.fulfilled, (state, action) => ({
      ...state,
      error: {
        ...state.error,
        'logout-error': action.payload.status?.message || action.payload.error,
      },
      loggedIn: false,
      data: {},
    }));
    builder.addCase(userSignup.fulfilled, (state, action) => {
      if (action.payload.status?.code === 200) {
        return {
          ...state,
          loggedIn: true,
          data: action.payload.data,
        };
      }
      return {
        ...state,
        error: {
          ...state.error,
          'signup-error':
            action.payload.status?.message || action.payload.error,
        },
      };
    });
  },
});

export {
  userLogin,
  userLogout,
  userSignup,
  getCurrentUser,
};
export default usersSlice.reducer;
