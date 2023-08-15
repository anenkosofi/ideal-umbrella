import React, { FC } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import Container from '@components/Container';
import OrderItem from '@components/OrderItem';
import { useAppSelector } from '@hooks';
import { selectCart } from '@store/cart/selectors';
import { getTotalDiscount, getTotalPriceWithoutDiscount } from '@utils';

import './Order.scss';

type OrderProps = {
  isFormShown: boolean;
  showForm: () => void;
};

const Order: FC<OrderProps> = ({ isFormShown, showForm }) => {
  const items = useAppSelector(selectCart);

  const getDiscountPercent = () => {
    const totalPrice = getTotalPriceWithoutDiscount(items);
    const totalDiscount = getTotalDiscount(items);
    return Math.floor((totalDiscount / totalPrice) * 100).toFixed();
  };

  const getTotalCost = () => {
    const totalPrice = getTotalPriceWithoutDiscount(items);
    const totalDiscount = getTotalDiscount(items);
    return totalPrice - totalDiscount;
  };

  return (
    <section className="order">
      <h1 className="order__heading">Cart</h1>
      <div className="order__container">
        <Container>
          {items.length ? (
            <>
              <ul className="order__list">
                {items.map(item => (
                  <OrderItem key={item._id} item={item} />
                ))}
              </ul>
              <div className="order__total">
                <p>
                  <span>Total Cost</span>
                  <span>{getTotalCost()}$</span>
                </p>
                <p>
                  <span>Discount</span>
                  <span>{getDiscountPercent()}%</span>
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
            </>
          ) : (
            <p className="order__empty">Your cart is empty :&#40;</p>
          )}
        </Container>
      </div>
    </section>
  );
};

export default Order;
