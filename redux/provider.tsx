'use client';

import { Provider } from 'react-redux';
import { persistor, store } from './store';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
}
