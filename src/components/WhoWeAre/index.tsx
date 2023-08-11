import React, { FC } from 'react';

import field from '@assets/field.jpg';
import Container from '@components/Container';

import './WhoWeAre.scss';

const items = [
  {
    id: '401',
    title: 'Start with Our Company First',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.',
  },
  {
    id: '402',
    title: 'Learn How to Grow Yourself',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.',
  },
  {
    id: '403',
    title: 'Farming Strategies of Today',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.',
  },
];

const WhoWeAre: FC = () => {
  return (
    <section className="who">
      <Container>
        <div className="who__container">
          <img src={field} alt="Field" className="who__pic" />
          <div className="who__content">
            <p className="who__pre-heading">Eco Friendly</p>
            <h2 className="who__heading">
              Econis is a Friendly
              <br /> Organic Store
            </h2>
            <ul className="who__list">
              {items.map(({ id, title, description }) => (
                <li key={id} className="who__item">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhoWeAre;
