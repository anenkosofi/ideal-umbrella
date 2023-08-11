import React, { FC } from 'react';

import About from '@components/About';
import Gallery from '@components/Gallery';
import Hero from '@components/Hero';
import News from '@components/News';
import OfferList from '@components/OfferList';
import WhoWeAre from '@components/WhoWeAre';

const Home: FC = () => {
  return (
    <>
      <Hero />
      <OfferList />
      <About />
      <WhoWeAre />
      <Gallery />
      <News />
    </>
  );
};

export default Home;
