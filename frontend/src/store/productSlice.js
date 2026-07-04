import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productService } from '../services/product.service.js';

export const searchProducts = createAsyncThunk('products/search', async (params) => {
  const response = await productService.search(params);
  return response;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    meta: null,
    loading: false,
    error: null,
    lastQuery: ''
  },
  reducers: {
    clearResults(state) {
      state.items = [];
      state.meta = null;
      state.error = null;
      state.lastQuery = '';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchProducts.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        state.lastQuery = action.meta.arg.q;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.data;
        state.meta = action.payload.meta;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Unable to load products';
      });
  }
});

export const { clearResults } = productSlice.actions;
export default productSlice.reducer;
