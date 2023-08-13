import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Product } from '@types';

axios.defaults.baseURL = 'https://organick-service.onrender.com/api/';

export const getProducts = createAsyncThunk<
    Product[],
    undefined,
    { rejectValue: string }
>('products/getProducts', async (_, thunkAPI) => {
    try {
        const response = await axios.get('products');
        return response.data;
    } catch (e: unknown) {
        if (e instanceof Error) {
            return thunkAPI.rejectWithValue(e.message);
        }
        return thunkAPI.rejectWithValue('An unknown error occurred.');
    }
});
