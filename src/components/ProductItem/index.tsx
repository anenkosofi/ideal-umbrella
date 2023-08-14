import React, { FC } from 'react';

import Rating from '@components/Rating';
import { Product } from '@types';
import { getDiscountPrice } from '@utils';

type ProductItemProps = {
  product: Product;
  openModal: (id: string) => void;
};
const ProductItem: FC<ProductItemProps> = ({
  product: { _id, name, image, category, rating, price, discount },
  openModal,
}) => {
  const discountPrice = getDiscountPrice(price, discount);

  return (
    <li className="products__item" onClick={() => openModal(_id)}>
      <img src={image} alt={name} className="products__pic" />
      <span className="products__tag">{category}</span>
      <div className="products__content">
        <div className="products__name">
          <p>{name}</p>
        </div>
        <div className="products__info">
          <div className="products__price">
            <span className={discount ? 'products__price_old' : ''}>${price}.00</span>
            {!!discount && <span>${discountPrice}.00</span>}
          </div>
          <Rating rating={rating} />
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
