import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const INITIAL_PAGE = 1;
const LIMIT = 8;

export interface FiltersState {
    query: string;
    page: number;
    limit: number;
}

const filtersInitialState = {
    query: '',
    page: INITIAL_PAGE,
    limit: LIMIT,
} as FiltersState;

const filtersSlice = createSlice({
    name: 'filters',
    initialState: filtersInitialState,
    reducers: {
        setQuery(state, action: PayloadAction<string>) {
            return { ...state, page: INITIAL_PAGE, query: action.payload };
        },
        setPage(state, action: PayloadAction<number>) {
            return { ...state, page: action.payload };
        },
    },
});

export const {
    setQuery,
    setPage,
} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
