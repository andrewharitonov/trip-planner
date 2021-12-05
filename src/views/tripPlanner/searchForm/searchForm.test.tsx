import React from 'react';
import {render} from '@testing-library/react';
import * as locationsApi from 'api/locations/locations';
import * as datesApi from 'api/dates/dates';
import SearchForm from './searchForm';

describe('SearchForm', () => {
  describe('No results section', () => {
    it('should show loading section if loading is in progress', async () => {
      const {findByText} = render(<SearchForm />);
      expect(await findByText('Loading locations, please wait')).toBeInTheDocument();
    });

    it('should show error message from the api call if failed', async () => {
      jest.spyOn(locationsApi, 'fetchLocations').mockRejectedValue(new Error("Couldn't fetch locations"));
      jest.spyOn(datesApi, 'fetchAvailableDates').mockRejectedValue(new Error("Couldn't fetch dates"));
      const {findByText} = render(<SearchForm />);

      expect(await findByText("Couldn't fetch locations")).toBeInTheDocument();
    });
  });

  it('should render country, city and date filters', async () => {
    jest.spyOn(locationsApi, 'fetchLocations').mockResolvedValue({});
    jest.spyOn(datesApi, 'fetchAvailableDates').mockResolvedValue([]);
    const {findByText} = render(<SearchForm />);

    expect(await findByText('Country')).toBeInTheDocument();
    expect(await findByText('City')).toBeInTheDocument();
    expect(await findByText('Date')).toBeInTheDocument();
  });
});
