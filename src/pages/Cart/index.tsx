import React, { FC, useState } from 'react';

import CompletedOrder from '@components/CompletedOrder';
import Order from '@components/Order';
import OrderForm from '@components/OrderForm';

const Cart: FC = () => {
  const [isFormShown, setIsFormShown] = useState(false);
  const [isSubmitSuccessfull, setIsSubmitSuccessfull] = useState(false);

  const showFormHandler = () => setIsFormShown(true);

  const submitFormHandler = () => setIsSubmitSuccessfull(true);

  if (isSubmitSuccessfull) {
    return <CompletedOrder />;
  }

  return (
    <>
      <Order isFormShown={isFormShown} showForm={showFormHandler} />
      {isFormShown && <OrderForm submitForm={submitFormHandler} />}
    </>
  );
};

export default Cart;
