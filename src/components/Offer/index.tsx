import React, { FC } from 'react';

import Container from '@components/Container';
import ProductList from '@components/ProductList';
import { useAppSelector } from '@hooks';
import { selectProducts } from '@store/products/selectors';
import { generateRandomNumbers } from '@utils';

import './Offer.scss';

const numbers = generateRandomNumbers();

const Offer: FC = () => {
  const items = useAppSelector(selectProducts);
  const randomProducts = items.length ? numbers.map(number => items[number]) : items;

  return (
    <section className="organic">
      <Container>
        <div className="organic__container">
          <p className="organic__pre-heading">Offer</p>
          <h2 className="organic__heading">We Offer Organic For You</h2>
          <ProductList items={randomProducts} />
        </div>
      </Container>
    </section>
  );
};

export default Offer;
