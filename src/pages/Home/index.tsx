import {getProducts} from "@store/products/operations";
import React, { FC, useEffect } from 'react';

import About from '@components/About';
import Gallery from '@components/Gallery';
import Hero from '@components/Hero';
import News from '@components/News';
import Offer from '@components/Offer';
import OfferList from '@components/OfferList';
import Products from "@components/Products";
import Testimonials from "@components/Testimonials";
import WhoWeAre from '@components/WhoWeAre';
import {useAppDispatch} from "@hooks";

const Home: FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [])

  return (
    <>
      <Hero />
      <OfferList />
      <About />
      <Products />
      <Testimonials />
      <Offer />
      <WhoWeAre />
      <Gallery />
      <News />
    </>
  );
};

export default Home;
