import React, { FC, useState } from 'react';

import Order from '@components/Order';
import OrderForm from '@components/OrderForm';

const Cart: FC = () => {
  const [isFormShown, setIsFormShown] = useState(false);

  const showFormHandler = () => setIsFormShown(true);

  return (
    <>
      <Order isFormShown={isFormShown} showForm={showFormHandler} />
      {isFormShown && <OrderForm />}
    </>
  );
};

export default Cart;
