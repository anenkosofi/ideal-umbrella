import React, { FC } from 'react';

import cookies from '@assets/cookies.jpg';
import food from '@assets/food.jpg';
import juice from '@assets/juice.jpg';
import Container from '@components/Container';

import './Gallery.scss';

const items = [
  {
    id: '101',
    image: juice,
    title: 'Organic Juice',
  },
  {
    id: '102',
    image: food,
    title: 'Organic Food',
  },
  {
    id: '103',
    image: cookies,
    title: 'Nuts Cookis',
  },
];

const Gallery: FC = () => {
  return (
    <section className="gallery">
      <Container>
        <ul className="gallery__list">
          {items.map(({ id, image, title }) => (
            <li key={id} className="gallery__item">
              <img src={image} alt={title} className="gallery__pic" />
              <p className="gallery__heading">{title}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Gallery;
