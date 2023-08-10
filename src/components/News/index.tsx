import React, { FC } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import Container from '@components/Container';
import NewsList from '@components/NewsList';

import './News.scss';

const News: FC = () => {
  return (
    <section className="news">
      <Container>
        <div className="news__content">
          <div className="news__heading-container">
            <div className="news__heading-wrapper">
              <p className="news__pre-heading">News</p>
              <h2 className="news__heading">
                Discover weekly content about <br /> organic food, &#38; more
              </h2>
            </div>
            <button type="button" className="news__more-button">
              <span>More News</span>
              <span className="news__read-icon">
                <FaArrowRight size={10} />
              </span>
            </button>
          </div>
          <NewsList />
        </div>
        <div className="news__subscribe">
          <h2 className="news__heading_white">
            Subscribe to
            <br /> our Newsletter
          </h2>
          <div className="news__field">
            <input type="text" placeholder="Your Email Address" className="news__input" />
            <button className="news__button">Subscribe</button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default News;
