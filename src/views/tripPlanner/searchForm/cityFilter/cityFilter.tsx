import React, {ChangeEventHandler, useContext} from 'react';
import FormField from 'components/formField/formFIeld';
import Select from 'components/select/select';
import {CityFilterPropsType} from './types';
import {INITIAL_PLANNER_FILTERS, PlannerFiltersContext} from 'views/tripPlanner/helpers';

const CityFilter = ({cities}: CityFilterPropsType) => {
  const {selectedFilters, updateSelectedFilters} = useContext(PlannerFiltersContext);

  const handleCityFilterChange: ChangeEventHandler<HTMLSelectElement> = event => {
    updateSelectedFilters({city: event.target.value, date: INITIAL_PLANNER_FILTERS.date});
  };

  return (
    <FormField title="City" disabled={!selectedFilters.country}>
      <Select
        options={cities}
        value={selectedFilters.city}
        onChange={handleCityFilterChange}
        placeholder="Choose the city"
        disabled={!selectedFilters.country}
      />
    </FormField>
  );
};

export default CityFilter;
