import React, {useContext} from 'react';
import NoResultsSection from 'components/noResultsSection/noResultsSection';
import styles from './styles.module.scss';
import CountryFilter from './countryFilter/countryFilter';
import CityFilter from './cityFilter/cityFilter';
import DateFilter from './dateFilter/dateFilter';
import {PlannerFiltersContext} from '../helpers';
import {useSearchForm} from './hooks';

const SearchForm = () => {
  const {selectedFilters} = useContext(PlannerFiltersContext);
  const {countries, dates, locations, isLoading, errorMessage} = useSearchForm();

  if (isLoading) {
    return <NoResultsSection>Loading locations, please wait</NoResultsSection>;
  }
  if (errorMessage) {
    return <NoResultsSection>{errorMessage}</NoResultsSection>;
  }

  const cities = locations[selectedFilters.country] || [];

  return (
    <section className={styles.searchForm}>
      <div className={styles.locationFilterSection}>
        <CountryFilter countries={countries} />
        <CityFilter cities={cities} />
      </div>
      <DateFilter dates={dates} />
    </section>
  );
};

export default SearchForm;
