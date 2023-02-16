import { configureStore } from '@reduxjs/toolkit';

import { toastReducer } from './slicers/toast';
import { sessionReducer } from './slicers/session';
import { companiesReducer } from './slicers/companies';

export const store = configureStore({
  reducer: {
    toast: toastReducer,
    session: sessionReducer,
    companies: companiesReducer
  }
});

export type AppDispatch = typeof store.dispatch;
