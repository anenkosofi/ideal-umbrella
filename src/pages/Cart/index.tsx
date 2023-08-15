import React, { FC, useState, useEffect } from 'react';

import Order from '@components/Order';
import OrderForm from '@components/OrderForm';
import { useAppDispatch } from '@hooks';
import { getCart } from '@store/cart/operations';

const Cart: FC = () => {
  const dispatch = useAppDispatch();

  const [isFormShown, setIsFormShown] = useState(false);

  useEffect(() => {
    dispatch(getCart());
  }, []);

  const showFormHandler = () => setIsFormShown(true);

  return (
    <>
      <Order isFormShown={isFormShown} showForm={showFormHandler} />
      {isFormShown && <OrderForm />}
    </>
  );
};

export default Cart;
