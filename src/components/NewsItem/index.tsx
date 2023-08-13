import React, { FC } from 'react';
import { FaUser, FaArrowRight } from 'react-icons/fa';
import {NavLink} from "react-router-dom";

type NewsItemProps = {
  newsItem: {
    id: string;
    image: string;
    title: string;
    description: string;
    author: string;
  };
};

const NewsItem: FC<NewsItemProps> = ({ newsItem: { id, image, title, description, author } }) => {
  return (
    <li className="news__item">
      <img src={image} alt={title} className="news__pic" />
      <p className="news__date">
        <span className="news__date_large">25</span>
        <span>Nov</span>
      </p>
      <div className="news__overview">
        <div className="news__author">
          <FaUser size={20} />
          <span>By&nbsp;{author}</span>
        </div>
        <h3 className="news__name">{title}</h3>
        <p className="news__description">{description}</p>
        <NavLink to={`news/${id}`} className="news__read-button">
          <span>Read More</span>
          <span className="news__read-icon">
            <FaArrowRight size={10} />
          </span>
        </NavLink>
      </div>
    </li>
  );
};

export default NewsItem;
