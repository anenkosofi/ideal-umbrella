import React, { FC } from 'react';

import Container from '@components/Container';

import './CompletedOrder.scss';

const CompletedOrder: FC = () => {
  return (
    <section className="default">
      <Container>
        <h1 className="default__heading">Thank you for your order</h1>
      </Container>
      <div className="default__bg"></div>
    </section>
  );
};

export default CompletedOrder;
