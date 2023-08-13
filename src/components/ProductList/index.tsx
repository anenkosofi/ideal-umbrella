import React, {FC} from 'react';

import ProductItem from "@components/ProductItem";
import {Product} from "@types";

type ProductListProps = {
    items: Product[];
}

const ProductList: FC<ProductListProps> = ({items}) => {
    return (
        <ul className="products__list">{items.map(item => <ProductItem key={item._id} product={item} />)}</ul>
    )
}

export default ProductList;
