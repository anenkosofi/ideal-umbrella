export const getDiscountPrice = (price: number, discount: number) =>
  discount ? Math.floor(((100 - discount) / 100) * price).toFixed() : 0;
