import { configureStore } from '@reduxjs/toolkit'
import { apislice } from './slice/apiSlice';
import cardSlice from './slice/cardSlice';

export const store= configureStore({
  reducer: {
    [apislice.reducerPath]: apislice.reducer,
    card:cardSlice
  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apislice.middleware),
})

export default store;
