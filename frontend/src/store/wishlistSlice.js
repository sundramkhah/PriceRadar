import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { wishlistService } from '../services/wishlist.service.js';

export const loadWishlist = createAsyncThunk('wishlist/list', async () => {
  const response = await wishlistService.list();
  return response.data;
});

export const addWishlistItem = createAsyncThunk('wishlist/add', async (payload) => {
  const response = await wishlistService.add(payload);
  return response.data;
});

export const removeWishlistItem = createAsyncThunk('wishlist/remove', async (productKey) => {
  await wishlistService.remove(productKey);
  return productKey;
});

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadWishlist.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(addWishlistItem.fulfilled, (state, action) => {
        const exists = state.items.some((item) => item.productKey === action.payload.productKey);
        if (!exists) state.items.unshift(action.payload);
      })
      .addCase(removeWishlistItem.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.productKey !== action.payload);
      });
  }
});

export default wishlistSlice.reducer;
