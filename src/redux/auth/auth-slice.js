import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled]: (state, { payload }) => ({
      ...state,
      user: payload.user,
      token: payload.token,
      isLoggedIn: true,
    }),
    [authOperations.logIn.fulfilled]: (state, { payload }) => ({
      ...state,
      user: payload.user,
      token: payload.token,
      isLoggedIn: true,
    }),
    [authOperations.logOut.fulfilled]: (state, _) => ({
      ...state,
      user: { name: null, email: null },
      token: null,
      isLoggedIn: false,
    }),
    [authOperations.fetchCurrentUser.fulfilled]: (state, { payload }) => ({
      ...state,
      user: payload,
      isLoggedIn: true,
      isFetchingCurrentUser: false,
    }),
    [authOperations.fetchCurrentUser.pending]: state => ({
      ...state,
      isFetchingCurrentUser: true,
    }),
    [authOperations.fetchCurrentUser.rejected]: state => ({
      ...state,
      isFetchingCurrentUser: false,
    }),
  },
});

export default authSlice.reducer;
