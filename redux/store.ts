'use client';

import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './slices/loginSlice';
import userSlice from './slices/userSlice';
import moviesSlice from './slices/moviesSlice';
import registerSlice from './slices/registerSlice';
import seatSlice from './slices/seatSlice';
export const store = configureStore({
  reducer: {
    login: loginSlice,
    user: userSlice,
    movies: moviesSlice,
    register: registerSlice,
    seat: seatSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
