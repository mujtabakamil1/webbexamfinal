// store.js
import { configureStore } from '@reduxjs/toolkit';

import apiReducer from './api';
 
export const store = configureStore({
  reducer: {
    
    data: apiReducer,
    
  },
});
