import { RootState } from '@store';

export const selectQuery = (state: RootState) => state.filters.query;

export const selectPage = (state: RootState) => state.filters.page;

export const selectLimit = (state: RootState) => state.filters.limit;
