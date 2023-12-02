'use client';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface LoginState {
  phoneNumber: string;
  password: string;
}

const initialState: LoginState = {
  phoneNumber: '',
  password: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    inputPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    inputPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { inputPhoneNumber, inputPassword } = loginSlice.actions;
export default loginSlice.reducer;
