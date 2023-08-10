import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '@components/Footer';
import Header from '@components/Header';

import './Layout.scss';

const Layout: FC = () => {
  return (
    <div className="layout">
      <Header />
      <main className="layout__content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
