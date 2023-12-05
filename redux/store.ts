'use client';

import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/loginSlice';
import userReducer from './slices/userSlice';
import moviesReducer from './slices/moviesSlice';
import registerReducer from './slices/registerSlice';
import seatReducer from './slices/seatSlice';
import authReducer from './slices/authSlice';
import scheduleReducer from './slices/scheduleSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    login: loginReducer,
    user: persistedReducer,
    movies: moviesReducer,
    register: registerReducer,
    seat: seatReducer,
    auth: authReducer,
    schedule: scheduleReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
