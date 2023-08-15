import { Cart } from '@types';

import { getDiscountPrice } from './getDiscountPrice';

export const getTotalDiscount = (items: Cart[]) => {
  const totalDiscount = items.reduce((acc, { product: { price, discount }, quantity }) => {
    const productDiscount = getDiscountPrice(price, discount);
    acc += discount ? (price - productDiscount) * Number(quantity) : 0;
    return acc;
  }, 0);
  return totalDiscount;
};

export const getTotalPriceWithoutDiscount = (items: Cart[]) => {
  const totalPrice = items.reduce((acc, { product: { price }, quantity }) => {
    acc += price * Number(quantity);
    return acc;
  }, 0);
  return totalPrice;
};
