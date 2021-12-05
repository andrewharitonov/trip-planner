import React, {useState} from 'react';
import HorizontalSeparator from 'components/horizontalSeparator/horizontalSeparator';
import NoResultsSection from 'components/noResultsSection/noResultsSection';
import styles from './styles.module.scss';
import {TripPlannerFilters, TripPlannerFiltersContext} from './types';
import SearchForm from './searchForm/searchForm';
import SearchResults from './searchResults/searchResults';
import {PlannerFiltersContext, INITIAL_PLANNER_FILTERS} from './helpers';

const TripPlanner = () => {
  const [selectedFilters, setSelectedFilters] = useState<TripPlannerFilters>(INITIAL_PLANNER_FILTERS);
  const updateSelectedFilters: TripPlannerFiltersContext['updateSelectedFilters'] = value => {
    setSelectedFilters(prevFilters => ({...prevFilters, ...value}));
  };

  const noFiltersSelected = !selectedFilters.country || !selectedFilters.city || !selectedFilters.date;

  return (
    <PlannerFiltersContext.Provider value={{selectedFilters, updateSelectedFilters}}>
      <div className={styles.tripPlanner}>
        <SearchForm />
        <HorizontalSeparator />
        {noFiltersSelected ? <NoResultsSection>Select filters first</NoResultsSection> : <SearchResults />}
      </div>
    </PlannerFiltersContext.Provider>
  );
};

export default TripPlanner;
