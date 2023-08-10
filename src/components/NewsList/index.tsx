import React, { FC } from 'react';

import leaves from '@assets/leaves.jpg';
import tomato from '@assets/tomato.jpg';
import NewsItem from '@components/NewsItem';

const items = [
  {
    id: '1',
    image: leaves,
    title: 'The Benefits of Vitamin D & How to Get It',
    description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    author: 'Rachi Card',
  },
  {
    id: '2',
    image: tomato,
    title: 'Our Favourite Summertime Tommeto',
    description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    author: 'Rachi Card',
  },
];

const NewsList: FC = () => {
  return (
    <ul className="news__list">
      {items.map(item => (
        <NewsItem key={item.id} newsItem={item} />
      ))}
    </ul>
  );
};

export default NewsList;
