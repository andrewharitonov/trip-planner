import {Product} from 'api/products/types';
import {SearchResultsProduct} from './types';

const getDiscountPrice = (price: number, discount: number) => {
  if (!discount) {
    return '';
  }

  const discountPrice = price - (price * discount) / 100;
  return discountPrice.toFixed(2);
};

export const getNormalizedProducts = (products: Product[]): SearchResultsProduct[] => {
  return products.map(product => ({
    id: product.id,
    title: product.title,
    description: product.summary,
    price: product.price.toFixed(2),
    discountPrice: getDiscountPrice(product.price, product.discount_percentage),
    image: product.image,
    url: product.product_url,
  }));
};
