import { RootState } from '@store';

export const selectIsLoading = (state: RootState) => state.productDetails.isLoading;

export const selectError = (state: RootState) => state.productDetails.error;

export const selectProductById = (state: RootState) => state.productDetails.selectedProduct;
