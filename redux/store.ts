'use client';

import { configureStore } from '@reduxjs/toolkit';
import extraSlice from './slices/extraSlice';
import loginSlice from './slices/loginSlice';
import userSlice from './slices/userSlice';
export const store = configureStore({
  reducer: {
    extra: extraSlice,
    login: loginSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
