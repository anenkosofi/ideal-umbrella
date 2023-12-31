import { createSlice } from '@reduxjs/toolkit';

import { Product } from '@types';

import { getProducts } from './operations';

export interface ProductsState {
  items: Product[];
  isLoading: boolean;
  error: null | string;
}

const productsInitialState: ProductsState = {
  items: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState: productsInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, state => {
        return { ...state, isLoading: true };
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        return { ...state, error: null, items: payload, isLoading: false };
      })
      .addCase(getProducts.rejected, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          error: payload ? payload : 'An unknown error occurred',
        };
      });
  },
});

export const productsReducer = productsSlice.reducer;
