import React, {FC} from 'react';

import Container from "@components/Container";
import ProductList from "@components/ProductList";

import './Offer.scss';

const Offer: FC = () => {
    return (
        <section className="organic">
            <Container>
                <div className="organic__container">
                    <p className="organic__pre-heading">Offer</p>
                    <h2 className="organic__heading">We Offer Organic For You</h2>
                    <ProductList />
                </div>
            </Container>
        </section>
    )
}

export default Offer;
