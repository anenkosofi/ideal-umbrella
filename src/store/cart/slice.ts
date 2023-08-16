import { createSlice } from '@reduxjs/toolkit';

import { Cart } from '@types';

import { getCart, addProduct, changeQuantity, deleteProduct } from './operations';

export interface CartState {
  items: Cart[];
  isLoading: boolean;
  error: null | string;
}

const cartInitialState: CartState = {
  items: [],
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCart.pending, state => {
        return { ...state, isLoading: true };
      })
      .addCase(getCart.fulfilled, (state, { payload }) => {
        return { ...state, error: null, items: payload, isLoading: false };
      })
      .addCase(getCart.rejected, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          error: payload ? payload : 'An unknown error occurred',
        };
      })
      .addCase(addProduct.pending, state => {
        return { ...state, isLoading: true };
      })
      .addCase(addProduct.fulfilled, (state, { payload }) => {
        return {
          ...state,
          items: state.items.map(item =>
            item.product._id === payload.product._id ? { ...item, ...payload } : item
          ),
          isLoading: false,
          error: null,
        };
      })
      .addCase(addProduct.rejected, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          error: payload ? payload : 'An unknown error occurred',
        };
      })
      .addCase(changeQuantity.pending, state => {
        return { ...state, isLoading: true };
      })
      .addCase(changeQuantity.fulfilled, (state, { payload }) => {
        const { _id, ...rest } = payload;
        return {
          ...state,
          items: state.items.map(item => (item._id === _id ? { ...item, ...rest } : item)),
          isLoading: false,
          error: null,
        };
      })
      .addCase(changeQuantity.rejected, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          error: payload ? payload : 'An unknown error occurred',
        };
      })
      .addCase(deleteProduct.pending, state => {
        return { ...state, isLoading: true };
      })
      .addCase(deleteProduct.fulfilled, (state, { payload }) => {
        return {
          ...state,
          items: state.items.filter(item => item._id !== payload._id),
          isLoading: false,
          error: null,
        };
      })
      .addCase(deleteProduct.rejected, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          error: payload ? payload : 'An unknown error occurred',
        };
      });
  },
});

export const cartReducer = cartSlice.reducer;
