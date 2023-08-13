import React, {FC} from 'react';

import Rating from "@components/Rating";
import {Product} from "@types";

type ProductItemProps = {
    product: Product;
}
const ProductItem: FC<ProductItemProps> = ({product: { name, image, category, rating, price, discount}}) => {
    const getDiscountPrice = () => discount ? Math.floor(((100 - discount) / 100) * price).toFixed() : 0;

    return (
        <li className="products__item">
            <img src={image} alt={name} className="products__pic"/>
            <span className="products__tag">{category}</span>
            <div className="products__content">
                <div className="products__name">
                    <p>{name}</p>
                </div>
                <div className="products__info">
                    <div className="products__price">
                        <span className={discount ? "products__price_old" : ''}>${price}.00</span>
                        {!!discount && <span>${getDiscountPrice()}.00</span>}
                    </div>
                    <Rating rating={rating} />
                </div>
            </div>
        </li>
    )
}

export default ProductItem;
