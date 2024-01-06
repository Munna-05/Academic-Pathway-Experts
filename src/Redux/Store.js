// store.js
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import blogSlice from './blogSlice';
import serviceSlice from './serviceSlice';
import JobSlice from './JobSlice';
import courseSlice from './courseSlice';
export const store = configureStore({
  reducer: {
    user: userSlice,
    blogs:blogSlice,
    services:serviceSlice,
    jobs:JobSlice,
    courses:courseSlice
  },

});
