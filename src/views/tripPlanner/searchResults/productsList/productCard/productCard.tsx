import React, {useRef, useState} from 'react';
import Card from 'components/card/card';
import {LazyImage} from 'components/lazyImage/lazyImage';
import styles from './styles.module.scss';
import {ProductCardProps} from './types';
import {getImageQueryParams, getLazyImageProps} from './helpers';
import ProductInfo from './productInfo/productInfo';

const ProductCard = ({
  title,
  description,
  price,
  discountPrice,
  image,
  currency,
  url,
  mobileLayout,
}: ProductCardProps) => {
  const imageUrl = `${image}${getImageQueryParams(mobileLayout)}`;
  const {height, width} = getLazyImageProps(mobileLayout);

  return (
    <a className={styles.productCardLink} href={url} target="_blank" rel="noopener noreferrer">
      <Card className={styles.productCard}>
        <LazyImage
          minHeight={height}
          minWidth={width}
          className={styles.image}
          src={imageUrl}
          alt={title}
        />
        <ProductInfo
          description={description}
          price={price}
          currency={currency}
          discountPrice={discountPrice}
          title={title}
        />
      </Card>
    </a>
  );
};

export default ProductCard;
