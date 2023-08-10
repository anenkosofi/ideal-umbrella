import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import Container from '@components/Container';
import Logo from '@components/Logo';
import { contactUsItems, socialItems, utilityPagesItems } from '@constants';

import './Footer.scss';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__upper-content">
        <Container>
          <div className="footer__content">
            <div className="footer__contact-us">
              <h2>Contact Us</h2>
              <ul>
                {contactUsItems.map(({ title, href, text }) => (
                  <li key={href}>
                    <span>{title}</span>
                    <NavLink to={href}>{text}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__social-links">
              <Logo />
              <p>
                Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy
                text of the printing
              </p>
              <ul>
                {socialItems.map(({ href, icon: Icon }) => (
                  <li key={href}>
                    <NavLink to={href} className="footer__link">
                      <Icon size={20} />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__utility-pages">
              <h2>Utility Pages</h2>
              <ul>
                {utilityPagesItems.map(({ href, text }) => (
                  <li key={href}>
                    <NavLink to={href}>{text}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="footer__bottom-content">
        <Container>
          <p className="footer__copyright">
            Copyright&nbsp;&#169;&nbsp;<span className="footer__copyright_bold">Organick</span>
            &nbsp;|&nbsp;Designed by&nbsp;
            <span className="footer__copyright_bold">VictorFlow</span>&nbsp;Templates - Powered
            by&nbsp;<span className="footer__copyright_bold">Webflow</span>
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
