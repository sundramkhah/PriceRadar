import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice.js';
import productReducer from './productSlice.js';
import wishlistReducer from './wishlistSlice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    wishlist: wishlistReducer
  }
});
