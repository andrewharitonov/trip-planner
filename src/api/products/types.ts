import {AvailableDates} from '../dates/dates';

export type Product = {
  product_url: string;
  image: string;
  id: number;
  title: string;
  price: number;
  discount_percentage: number;
  summary: string;
  city_id: number;
  available_dates: AvailableDates;
};

export type FetchProductsParams = {
  date?: string;
  city_id?: string;
};
