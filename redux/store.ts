'use client';

import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/loginSlice';
import userReducer from './slices/userSlice';
import registerReducer from './slices/registerSlice';
import seatReducer from './slices/seatSlice';
import authReducer from './slices/authSlice';
import timeReducer from './slices/timeSlice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
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
    register: registerReducer,
    seat: seatReducer,
    auth: authReducer,
    time: timeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
