import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { filtersReducer } from './filters/slice';
import { productDetailsReducer } from './productDetails/slice';
import { productsReducer } from './products/slice';
import { ProductsState } from './products/slice';

const productsPersistConfig = {
  key: 'products',
  storage,
};

export const store = configureStore({
  reducer: {
    products: persistReducer<ProductsState>(productsPersistConfig, productsReducer),
    productDetails: productDetailsReducer,
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
