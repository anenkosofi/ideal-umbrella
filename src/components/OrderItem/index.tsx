import React, { FC } from 'react';

import { Product } from '@types';
import { getDiscountPrice } from '@utils';

type OrderItemProps = {
  item: Product;
};

const OrderItem: FC<OrderItemProps> = ({ item: { name, image, price, discount } }) => {
  const discountPrice = getDiscountPrice(price, discount);

  return (
    <li className="order__item">
      <div className="order__pic">
        <img src={image} alt={name} />
      </div>
      <div className="order__overview">
        <p className="order__name">{name}</p>
        <div className="order__price">
          <span className={discount ? 'order__price_old' : ''}>${price}.00</span>
          {!!discount && <span>${discountPrice}.00</span>}
        </div>
      </div>
      <div className="order__control">
        <span className="order__quantity">Quantity:</span>
        <input type="text" className="order__input" />
      </div>
      <button type="button" className="order__x-button">
        X
      </button>
    </li>
  );
};

export default OrderItem;
