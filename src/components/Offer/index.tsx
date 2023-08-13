import React, {FC} from 'react';

import Container from "@components/Container";
import ProductList from "@components/ProductList";

import './Offer.scss';

const Offer: FC = () => {
    return (
        <section className="organic">
            <Container>
                <p className="organic__pre-heading">Offer</p>
                <h2 className="organic__heading">We Offer Organic For You</h2>
                <ProductList />
            </Container>
        </section>
    )
}

export default Offer;
