'use client';

import { configureStore } from '@reduxjs/toolkit';
import extraSlice from './slices/extraSlice';
import loginSlice from './slices/loginSlice';
import userSlice from './slices/userSlice';
import moviesSlice from './slices/moviesSlice';
export const store = configureStore({
  reducer: {
    extra: extraSlice,
    login: loginSlice,
    user: userSlice,
    movies: moviesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
