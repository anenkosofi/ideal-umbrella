export const getDiscountPrice = (price: number, discount: number) =>
  discount ? Number(Math.floor(((100 - discount) / 100) * price).toFixed()) : 0;
