import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import {ProductInfoProps} from './types';

const ProductInfo = ({title, description, price, discountPrice, currency}: ProductInfoProps) => {
  const priceClassName = classNames(styles.price, discountPrice && styles.discountPrice);

  return (
    <div className={styles.productInfo}>
      <span className={styles.title}>{title}</span>
      {description && <span className={styles.description}>{description}</span>}
      {price && (
        <div className={styles.priceInfo}>
          <span className={priceClassName}>
            {currency}
            {discountPrice || price}
          </span>
          {discountPrice && (
            <span className={styles.oldPrice}>
              {currency}
              {price}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
