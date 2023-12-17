// store.js
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import blogSlice from './blogSlice';
export const store = configureStore({
  reducer: {
    user: userSlice,
    blogs:blogSlice,
  },
});
