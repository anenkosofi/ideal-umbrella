import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as Cart } from '@assets/cart.svg';
import { ReactComponent as Loop } from '@assets/loop.svg';
import Container from '@components/Container';
import Logo from '@components/Logo';
import { navItems } from '@constants';
import { Pathname } from '@types';

import './Header.scss';

const Header: FC = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__container">
          <Logo />
          <nav className="header__nav">
            <ul className="header__nav-list">
              {navItems.map(({ href, text, icon: Icon }) => (
                <li key={text} className="header__nav-item">
                  {href ? (
                    <NavLink to={href} className="header__nav-link">
                      <span className="header__nav-text">{text}</span>
                      {Icon && React.createElement(Icon)}
                    </NavLink>
                  ) : (
                    <>
                      <span className="header__nav-text">{text}</span>
                      {Icon && <Icon />}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__field">
            <input type="text" className="header__input" />
            <button className="header__search-button">
              <Loop className="header__loop-icon" />
            </button>
          </div>
          <NavLink to={Pathname.CART} className="header__cart">
            <span className="header__cart-icon">
              <Cart />
            </span>
            <span className="header__cart-text">Cart (0)</span>
          </NavLink>
        </div>
      </Container>
    </header>
  );
};

export default Header;
