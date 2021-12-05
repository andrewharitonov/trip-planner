import {useContext, useEffect, useState} from 'react';
import {AvailableDates, fetchAvailableDates} from 'api/dates/dates';
import {fetchLocations} from 'api/locations/locations';
import {SearchFormCountries, SearchFormLocations} from './types';
import {getNormalizedCountries, getNormalizedLocations} from './helpers';

export const useSearchForm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const [countries, setCountries] = useState<SearchFormCountries>([]);
  const [locations, setLocations] = useState<SearchFormLocations>({});
  const [dates, setDates] = useState<AvailableDates>([]);

  useEffect(() => {
    // TODO: set isLoading only after 100ms to avoid flashing
    setIsLoading(true);
    Promise.all([fetchLocations(), fetchAvailableDates()])
      .then(([locationsData, datesData]) => {
        setCountries(getNormalizedCountries(locationsData));
        setLocations(getNormalizedLocations(locationsData));
        setDates(datesData);
      })
      .catch(e => setErrorMessage(e.message))
      .finally(() => setIsLoading(false));
  }, []);

  return {countries, locations, dates, isLoading, errorMessage};
};
