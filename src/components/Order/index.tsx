import React, { FC } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import Container from '@components/Container';
import OrderItem from '@components/OrderItem';

import './Order.scss';

const items = [
  {
    description: {
      s: "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      l: 'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
    },
    _id: '64d8e6fc1fb4b611c8e61355',
    name: 'Mung Bean',
    image: 'https://i.ibb.co/h2WjvS4/salad.png',
    category: 'Vegetable',
    rating: 5,
    price: 11,
    discount: 0,
    additional:
      "A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
  },
  {
    description: {
      s: "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      l: 'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
    },
    _id: '64d8e6fc1fb4b611c8e6134f',
    name: 'Eggs',
    image: 'https://i.ibb.co/W2WsqfQ/eggs.png',
    category: 'Fresh',
    rating: 5,
    price: 20,
    discount: 15,
    additional:
      "A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
  },
  {
    description: {
      s: "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      l: 'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
    },
    _id: '64d8e6fc1fb4b611c8e61350',
    name: 'Zelco Suji Elaichi Rusk',
    image: 'https://i.ibb.co/M1hGS1Z/rusk.png',
    category: 'Fresh',
    rating: 5,
    price: 20,
    discount: 25,
    additional:
      "A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
  },
  {
    description: {
      s: "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      l: 'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
    },
    _id: '64d8e6fc1fb4b611c8e61357',
    name: 'Onion',
    image: 'https://i.ibb.co/26jYTdn/onion.png',
    category: 'Vegetable',
    rating: 5,
    price: 18,
    discount: 0,
    additional:
      "A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
  },
];

type OrderProps = {
  isFormShown: boolean;
  showForm: () => void;
};

const Order: FC<OrderProps> = ({ isFormShown, showForm }) => {
  return (
    <section className="order">
      <h1 className="order__heading">Cart</h1>
      <div className="order__container">
        <Container>
          <ul className="order__list">
            {items.map(item => (
              <OrderItem key={item._id} item={item} />
            ))}
          </ul>
          <div className="order__total">
            <p>
              <span>Total Cost</span>
              <span>26$</span>
            </p>
            <p>
              <span>Discount</span>
              <span>14%</span>
            </p>
          </div>
          {!isFormShown && (
            <button type="button" className="order__button" onClick={showForm}>
              <span>To order</span>
              <span className="order__icon">
                <FaArrowRight size={10} />
              </span>
            </button>
          )}
        </Container>
      </div>
    </section>
  );
};

export default Order;
