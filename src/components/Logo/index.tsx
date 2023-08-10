import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as LogoIcon } from '@assets/logo.svg';
import { Pathname } from '@types';

import './Logo.scss';

const Logo: FC = () => {
  return (
    <Link to={Pathname.HOME} className="logo">
      <LogoIcon className="logo__icon" />
      <span className="logo__text">Organick</span>
    </Link>
  );
};

export default Logo;
