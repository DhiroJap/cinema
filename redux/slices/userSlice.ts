'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  id: string;
  name: string;
  phoneNumber: string;
  email: string;
  gender: string;
  birthDate: Date;
}

const initialState: UserState = {
  id: '',
  name: '',
  phoneNumber: '',
  email: '',
  gender: '',
  birthDate: new Date(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<UserState>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
