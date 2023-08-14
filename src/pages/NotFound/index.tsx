import React, { FC } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import Container from '@components/Container';
import { Pathname } from '@types';

import './NotFound.scss';

const NotFound: FC = () => {
  return (
    <section className="not-found">
      <Container>
        <div className="not-found__container">
          <h1 className="not-found__heading">
            <span className="not-found__heading_large">404</span>
            <span>Page not found</span>
          </h1>
          <p className="not-found__description">
            The page you are looking for doesn&apos;t exist or has been moved
          </p>
          <NavLink to={Pathname.HOME} className="not-found__go-button">
            <span>Go to Homepage</span>
            <span className="not-found__go-icon">
              <FaArrowRight size={10} />
            </span>
          </NavLink>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
