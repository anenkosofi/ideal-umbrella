import React, { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '@components/Footer';
import Header from '@components/Header';
import Loader from '@components/Loader';

import './Layout.scss';

const Layout: FC = () => {
  return (
    <div className="layout">
      <Header />
      <main className="layout__content">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
