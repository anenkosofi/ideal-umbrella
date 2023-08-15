import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Cart } from '@types';

export const getCart = createAsyncThunk<Cart[], undefined, { rejectValue: string }>(
  'cart/getCart',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('cart');
      return response.data;
    } catch (e: unknown) {
      if (axios.isAxiosError(e) && e.response?.data?.message) {
        return thunkAPI.rejectWithValue(e.response.data.message);
      }
      return thunkAPI.rejectWithValue('An unknown error occurred.');
    }
  }
);

export const addProduct = createAsyncThunk<
  Cart,
  { product: string; quantity: string },
  { rejectValue: string }
>('cart/addProduct', async (product, thunkAPI) => {
  try {
    const response = await axios.post('/cart', product);
    return response.data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e) && e.response?.data?.message) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
    return thunkAPI.rejectWithValue('An unknown error occurred.');
  }
});

export const changeQuantity = createAsyncThunk<
  Cart,
  Pick<Cart, 'quantity' | '_id'>,
  { rejectValue: string }
>('cart/changeQuantity', async ({ _id, ...rest }, thunkAPI) => {
  try {
    const response = await axios.put(`cart/${_id}`, rest);
    return response.data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e) && e.response?.data?.message) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
    return thunkAPI.rejectWithValue('An unknown error occurred.');
  }
});

export const deleteProduct = createAsyncThunk<Cart, string, { rejectValue: string }>(
  'cart/deleteProduct',
  async (_id, thunkAPI) => {
    try {
      const response = await axios.delete(`cart/${_id}`);
      return response.data;
    } catch (e: unknown) {
      if (axios.isAxiosError(e) && e.response?.data?.message) {
        return thunkAPI.rejectWithValue(e.response.data.message);
      }
      return thunkAPI.rejectWithValue('An unknown error occurred.');
    }
  }
);
