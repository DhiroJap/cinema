'use client';

import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface User {
  id: string;
  name: string;
  phoneNumber: string;
  email: string;
  gender: string;
  birthdate: string;
}

interface UserState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  tokenExpiration: Date | null;
}

const initialState: UserState = {
  user: null,
  token: null,
  isAuthenticated: false,
  tokenExpiration: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<UserState>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.tokenExpiration = action.payload.tokenExpiration;
    },
    clearUserData(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.tokenExpiration = null;
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;

const selectUserState = (state: RootState) => state.user;

export const selectUser = createSelector(
  selectUserState,
  (userState) => userState.user
);

export const selectToken = createSelector(
  selectUserState,
  (userState) => userState.token
);

export const selectIsAuthenticated = createSelector(
  selectUserState,
  (userState) => userState.isAuthenticated
);
