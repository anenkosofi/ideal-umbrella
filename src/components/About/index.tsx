import React, { FC } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import mail from '@assets/mail.png';
import oranges from '@assets/oranges.png';
import vegan from '@assets/vegan.png';
import Container from '@components/Container';

import './About.scss';

const items = [
  {
    id: '301',
    image: vegan,
    title: 'Organic Foods Only',
    description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
  },
  {
    id: '302',
    image: mail,
    title: 'Quality Standards',
    description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
  },
];

const About: FC = () => {
  return (
    <section className="about">
      <Container>
        <div className="about__container">
          <div className="about__pic">
            <img src={oranges} alt="Oranges" />
          </div>
          <div className="about__content">
            <p className="about__pre-heading">About Us</p>
            <h2 className="about__heading">
              We Believe in Working
              <br /> Accredited Farmers
            </h2>
            <p className="about__description">
              Simply dummy text of the printing and typesetting industry. Lorem had ceased to been
              the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
              took a galley.
            </p>
            <ul className="about__list">
              {items.map(({ id, image, title, description }) => (
                <li key={id} className="about__item">
                  <div className="about__icon">
                    <img src={image} alt={title} />
                  </div>
                  <div className="about__overview">
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button type="button" className="about__shop-button">
              <span>Shop Now</span>
              <span className="about__shop-icon">
                <FaArrowRight size={10} />
              </span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
