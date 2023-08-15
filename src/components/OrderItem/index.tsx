import React, { FC } from 'react';

import { useAppDispatch } from '@hooks';
import { deleteProduct } from '@store/cart/operations';
import { Cart } from '@types';
import { getDiscountPrice } from '@utils';

type OrderItemProps = {
  item: Cart;
};

const OrderItem: FC<OrderItemProps> = ({
  item: {
    product: { name, image, price, discount },
    quantity,
    _id,
  },
}) => {
  const dispatch = useAppDispatch();

  const discountPrice = getDiscountPrice(price, discount);

  const deleteProductHandler = () => dispatch(deleteProduct(_id));

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
        <input type="text" className="order__input" defaultValue={quantity} />
      </div>
      <button type="button" className="order__x-button" onClick={deleteProductHandler}>
        X
      </button>
    </li>
  );
};

export default OrderItem;
