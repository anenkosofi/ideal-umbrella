import React, { FC, useState, useEffect } from 'react';

import Loader from '@components/Loader';
import Modal from '@components/Modal';
import ProductDetails from '@components/ProductDetails';
import ProductItem from '@components/ProductItem';
import { useAppDispatch, useAppSelector } from '@hooks';
import { getProductById } from '@store/productDetails/operations';
import { selectIsLoading } from '@store/products/selectors';
import { Product } from '@types';

type ProductListProps = {
  items: Product[];
};

const ProductList: FC<ProductListProps> = ({ items }) => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsLoading);

  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      dispatch(getProductById(id));
    }
  }, [id]);

  useEffect(() => {
    const bodyEl = document.getElementById('body') as HTMLElement;

    bodyEl.style.overflow = id ? 'hidden' : 'visible';
  }, [id]);

  const openModalHandler = (id: string) => setId(id);

  const closeModalHandler = () => setId(null);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <ul className="products__list">
        {items.map(item => (
          <ProductItem key={item._id} product={item} openModal={openModalHandler} />
        ))}
      </ul>
      {id && (
        <Modal closeModal={closeModalHandler}>
          <ProductDetails closeModal={closeModalHandler} />
        </Modal>
      )}
    </>
  );
};

export default ProductList;
