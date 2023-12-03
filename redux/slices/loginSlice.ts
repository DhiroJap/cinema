'use client';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface LoginState {
  phoneNumber: string;
  password: string;
  isPasswordValid: boolean;
}

const initialState: LoginState = {
  phoneNumber: '',
  password: '',
  isPasswordValid: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    inputPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    inputPassword: (state, action: PayloadAction<string>) => {
      const password = action.payload;
      state.password = password;
      state.isPasswordValid = isPasswordValid(password);
    },
  },
});

const isPasswordValid = (password: string): boolean => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  return passwordRegex.test(password);
};

export const { inputPhoneNumber, inputPassword } = loginSlice.actions;
export default loginSlice.reducer;
