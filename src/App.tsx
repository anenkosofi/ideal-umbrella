import React, { FC, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '@components/Layout';
import { useAppDispatch } from '@hooks';
import { getCart } from '@store/cart/operations';
import { Pathname } from '@types';
const AboutPage = lazy(() => import('@pages/About'));
const BlogPage = lazy(() => import('@pages/Blog'));
const CartPage = lazy(() => import('@pages/Cart'));
const HomePage = lazy(() => import('@pages/Home'));
const NotFoundPage = lazy(() => import('@pages/NotFound'));
const ProjectsPage = lazy(() => import('@pages/Projects'));
const ServicesPage = lazy(() => import('@pages/Services'));
const ShopPage = lazy(() => import('@pages/Shop'));

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <Routes>
      <Route path={Pathname.HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={Pathname.CART} element={<CartPage />} />
        <Route path={Pathname.ABOUT} element={<AboutPage />} />
        <Route path={Pathname.SHOP} element={<ShopPage />} />
        <Route path={Pathname.BLOG} element={<BlogPage />} />
        <Route path={Pathname.SERVICES} element={<ServicesPage />} />
        <Route path={Pathname.PROJECTS} element={<ProjectsPage />} />
        <Route path={Pathname.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
