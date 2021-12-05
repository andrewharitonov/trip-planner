import React, {useRef} from 'react';
import {useWindowResize} from 'hooks/useWindowResize';
import {CURRENCY} from 'constants/globals';
import ProductCard from 'views/tripPlanner/searchResults/productsList/productCard/productCard';
import styles from './styles.module.scss';
import {ProductsListProps} from './types';

const ProductsList = ({products}: ProductsListProps) => {
  // If element's layout calculations needed, use ResizeObserver instead
  const {isMobileLayout} = useWindowResize();

  return (
    <div className={styles.productsList}>
      {products.map(({id, title, description, price, discountPrice, image, url}) => {
        return (
          <ProductCard
            key={id}
            title={title}
            description={description}
            price={price}
            currency={CURRENCY}
            discountPrice={discountPrice}
            image={image}
            url={url}
            mobileLayout={isMobileLayout}
          />
        );
      })}
    </div>
  );
};

export default ProductsList;
