import {useContext, useEffect, useState} from 'react';
import {fetchProducts} from 'api/products/products';
import {SearchResultsProduct} from './types';
import {getNormalizedProducts} from './helpers';
import {PlannerFiltersContext} from '../helpers';

export const useProducts = () => {
  const {selectedFilters} = useContext(PlannerFiltersContext);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [products, setProducts] = useState<SearchResultsProduct[]>([]);

  // In real app SWR or react-query would be used to achieve caching.
  // If you use XHR, abort the request when selectedFilters change
  useEffect(() => {
    const queryParams = {date: selectedFilters.date, city_id: selectedFilters.city};
    // TODO: set isLoading only after 100ms to avoid flashing
    setIsLoading(true);
    fetchProducts(queryParams)
      .then(productsData => setProducts(getNormalizedProducts(productsData)))
      .catch(e => {
        setErrorMessage(e.message);
      })
      .finally(() => setIsLoading(false));
  }, [selectedFilters]);

  return {products, isLoading, errorMessage};
};
