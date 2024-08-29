// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import courseReducer from './coursesSlice';
import studentReducer from './studentSlice';

export const store = configureStore({
  reducer: {
    courses: courseReducer,
    students: studentReducer,
  },
});
