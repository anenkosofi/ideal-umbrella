import { RootState } from '@store';

export const selectCart = (state: RootState) => state.cart.items;

export const selectIsLoading = (state: RootState) => state.cart.isLoading;

export const selectError = (state: RootState) => state.cart.error;
