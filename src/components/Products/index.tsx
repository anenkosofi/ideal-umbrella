import React, {FC} from 'react';

import Container from "@components/Container";
import ProductList from '@components/ProductList';

import './Products.scss';
import {FaArrowRight} from "react-icons/fa";

const Products: FC = () => {
    return (
        <section className="products">
            <Container>
                <p className="products__pre-heading">Categories</p>
                <h2 className="products__heading">Our Products</h2>
                <ProductList />
                <button type="button" className="products__load-button">
                    <span>Load More</span>
                    <span className="products__load-icon">
                    <FaArrowRight size={10} />
                </span>
                </button>
            </Container>
        </section>
    )
}

export default Products;
