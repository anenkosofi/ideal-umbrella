import React, { FC, useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import Container from '@components/Container';
import ProductList from '@components/ProductList';
import { useAppSelector, useAppDispatch } from '@hooks';
import { selectLimit, selectPage } from '@store/filters/selectors';
import { setPage } from '@store/filters/slice';
import { selectVisibleProducts } from '@store/products/selectors';
import { PaginationButton, Product } from '@types';
import { getProductPerPage } from '@utils';

import './Products.scss';

const Products: FC = () => {
  const dispatch = useAppDispatch();

  const items = useAppSelector(selectVisibleProducts);
  const page = useAppSelector(selectPage);
  const limit = useAppSelector(selectLimit);

  const [productsPerPage, setProductsPerPage] = useState<Product[]>([]);

  useEffect(() => {
    const products = getProductPerPage({ page, limit, products: items });
    if (page === 1) {
      return setProductsPerPage(products);
    }
    setProductsPerPage(prevState => [...prevState, ...products]);
  }, [page, items]);

  const paginationHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (items.length === productsPerPage.length) {
      return dispatch(setPage(1));
    }
    return dispatch(setPage(page + 1));
  };

  return (
    <section className="products">
      <Container>
        <p className="products__pre-heading">Categories</p>
        <h2 className="products__heading">Our Products</h2>
        <ProductList items={productsPerPage} />
        <button type="button" className="products__load-button" onClick={paginationHandler}>
          <span>{page === 1 ? PaginationButton.LOAD_MORE : PaginationButton.HIDE_ALL}</span>
          <span className="products__load-icon">
            <FaArrowRight size={10} />
          </span>
        </button>
      </Container>
    </section>
  );
};

export default Products;
