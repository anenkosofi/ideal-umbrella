import React, { FC, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import Container from '@components/Container';
import Loader from '@components/Loader';
import Rating from '@components/Rating';
import { useAppSelector } from '@hooks';
import { selectProductById } from '@store/productDetails/selectors';
import { selectIsLoading } from '@store/productDetails/selectors';
import { Tab } from '@types';
import { getDiscountPrice } from '@utils';

import './ProductDetails.scss';

type ProductDetailsProps = {
  closeModal: () => void;
};

const ProductDetails: FC<ProductDetailsProps> = ({ closeModal }) => {
  const selectedProduct = useAppSelector(selectProductById);
  const isLoading = useAppSelector(selectIsLoading);

  const [selectedTab, setSelectedTab] = useState(Tab.PRODUCT_DESCRIPTION);

  if (!selectedProduct) {
    return null;
  }

  const { name, image, category, description, rating, price, discount, additional } =
    selectedProduct;

  const discountPrice = getDiscountPrice(price, discount);

  const setTab = (tab: Tab) => {
    setSelectedTab(tab);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <div className="details">
        <button type="button" className="details__button" onClick={closeModal}>
          X
        </button>
        <div className="details__product">
          <div className="details__pic">
            <img src={image} alt={name} />
            <span className="details__tag">{category}</span>
          </div>
          <div className="details__content">
            <h1 className="details__name">{name}</h1>
            <Rating rating={rating} />
            <div className="details__price">
              <span className={discount ? 'products__price_old' : ''}>${price}.00</span>
              {!!discount && <span>${discountPrice}.00</span>}
            </div>
            <p className="details__description">{description.s}</p>
            <div className="details__control">
              <span className="details__quantity">Quantity:</span>
              <input type="text" placeholder="1" className="details__input" />
              <button type="button" className="details__add-button">
                <span>Add To Cart</span>
                <span className="details__add-icon">
                  <FaArrowRight size={10} />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="details__additional">
          <ul className="details__tabs">
            <li
              className={
                selectedTab === Tab.PRODUCT_DESCRIPTION
                  ? 'details__option details__option_active'
                  : 'details__option'
              }
              onClick={() => setTab(Tab.PRODUCT_DESCRIPTION)}
            >
              Product Description
            </li>
            <li
              className={
                selectedTab === Tab.ADDITIONAL_INFO
                  ? 'details__option details__option_active'
                  : 'details__option'
              }
              onClick={() => setTab(Tab.ADDITIONAL_INFO)}
            >
              Additional Info
            </li>
          </ul>
          <div className="details__container">
            {selectedTab === Tab.PRODUCT_DESCRIPTION ? description.l : additional}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
