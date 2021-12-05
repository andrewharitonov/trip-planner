import {Locations} from 'api/locations/locations';
import {SearchFormCountries, SearchFormLocations} from './types';

export const getNormalizedCountries = (locations: Locations): SearchFormCountries => {
  return Object.keys(locations).map(locationKey => {
    return {
      value: locationKey,
      name: locationKey,
    };
  });
};

export const getNormalizedLocations = (locations: Locations): SearchFormLocations => {
  const normalizedLocations: SearchFormLocations = {};
  for (let key in locations) {
    normalizedLocations[key] = locations[key].map(cityArr => {
      return {
        value: String(cityArr[0]),
        name: cityArr[1],
      };
    });
  }

  return normalizedLocations;
};
