import React, { FC } from 'react';

import bananas from '@assets/bananas.jpg';
import peaches from '@assets/peaches.jpg';
import Container from '@components/Container';

import './OfferList.scss';

const items = [
  {
    id: '201',
    image: bananas,
    pretitle: 'Natural!!',
    title: 'Get Garden Fresh Fruits',
    color: 'light',
  },
  {
    id: '202',
    image: peaches,
    pretitle: 'Offer!!',
    title: 'Get 10% off on Vegetables',
    color: 'dark',
  },
];

const OfferList: FC = () => {
  return (
    <section className="offer">
      <Container>
        <ul className="offer__list">
          {items.map(({ id, image, pretitle, title, color }) => (
            <li key={id} className="offer__item">
              <img src={image} alt={title} className="offer__pic" />
              <div className="offer__content">
                <p style={{ color: color === 'light' ? '#ffffff' : '#7EB693' }}>{pretitle}</p>
                <h2 style={{ color: color === 'light' ? '#ffffff' : '#274C5B' }}>{title}</h2>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default OfferList;
