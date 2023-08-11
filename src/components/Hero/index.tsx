import React, { FC } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import Container from '@components/Container';

import './Hero.scss';

const Hero: FC = () => {
  return (
    <section className="hero">
      <Container>
        <p className="hero__pre-heading">100% Natural Food</p>
        <h1 className="hero__heading">
          Choose the best
          <br /> healthier way
          <br /> of life
        </h1>
        <button type="button" className="hero__explore-button">
          <span>Explore Now</span>
          <span className="news__read-icon">
            <FaArrowRight size={10} />
          </span>
        </button>
      </Container>
    </section>
  );
};

export default Hero;
