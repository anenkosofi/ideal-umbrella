import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@store';

export const selectProducts = (state: RootState) => state.products.items;

export const selectIsLoading = (state: RootState) => state.products.isLoading;

export const selectError = (state: RootState) => state.products.error;

export const selectVisibleProducts = createSelector([selectProducts], products => {
  const nonDiscountedProducts = products.filter(product => !product.discount);
  const discountedProducts = products.filter(product => product.discount);

  return [...discountedProducts, ...nonDiscountedProducts];
});
