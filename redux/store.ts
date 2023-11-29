'use client';

import { configureStore } from '@reduxjs/toolkit';
import extraSlice from './slices/extraSlice';
export const store = configureStore({
  reducer: {
    extra: extraSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
