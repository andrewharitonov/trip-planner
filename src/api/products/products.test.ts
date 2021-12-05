import fetch from 'jest-fetch-mock';
import {fetchProducts} from './products';
import {FetchProductsParams} from './types';

const fetchProductsParams: FetchProductsParams = {
  date: '04-12-2021',
  city_id: '123456',
};

describe('Products', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should use correct query params', () => {
    const fetchMock = fetch.mockResponseOnce('{}');

    fetchProducts(fetchProductsParams).then(() => {});
    expect(fetchMock).toHaveBeenCalledWith('api/products?date=04-12-2021&city_id=123456');
  });

  it('should throw an error with correct message', () => {
    fetch.mockRejectOnce(new Error());

    fetchProducts().catch(error => {
      expect(error.message).toEqual("Couldn't fetch products");
    });
  });
});
