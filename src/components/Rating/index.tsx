import React, { FC } from 'react';
import { FaStar } from 'react-icons/fa';

import './Rating.scss';

type RatingProps = {
  rating: number;
};

const Rating: FC<RatingProps> = ({ rating }) => {
  return (
    <ul className="rating__list">
      {[...Array(rating)].map((_, index) => (
        <li key={index} className="rating__item">
          <FaStar className="rating__icon" />
        </li>
      ))}
      {rating < 5 &&
        [...Array(5 - rating)].map((_, index) => (
          <li key={index} className="rating__item">
            <FaStar className="rating__icon rating__icon_empty" />
          </li>
        ))}
    </ul>
  );
};

export default Rating;
