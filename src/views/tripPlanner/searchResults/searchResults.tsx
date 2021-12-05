import React from 'react';
import NoResultsSection from 'components/noResultsSection/noResultsSection';
import styles from './styles.module.scss';
import ProductsList from './productsList/productsList';
import {useProducts} from './hooks';

const SearchResults = () => {
  const {products, errorMessage, isLoading} = useProducts();

  if (errorMessage) {
    return <NoResultsSection>{errorMessage}</NoResultsSection>;
  }
  if (isLoading) {
    return <NoResultsSection>Loading results, please wait</NoResultsSection>;
  }
  if (!products.length) {
    return <NoResultsSection>Nothing found, please try a different date</NoResultsSection>;
  }

  return (
    <div className={styles.searchResults}>
      <ProductsList products={products} />
    </div>
  );
};

export default SearchResults;
