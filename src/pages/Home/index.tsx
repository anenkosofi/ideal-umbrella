import React, { FC } from 'react';

import About from '@components/About';
import Gallery from '@components/Gallery';
import Hero from '@components/Hero';
import News from '@components/News';
import OfferList from '@components/OfferList';

const Home: FC = () => {
  return (
    <>
      <Hero />
      <OfferList />
      <About />
      <Gallery />
      <News />
    </>
  );
};

export default Home;
