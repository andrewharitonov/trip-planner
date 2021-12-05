import React, {ChangeEventHandler, useContext} from 'react';
import {CountryFilterProps} from './types';
import FormField from 'components/formField/formFIeld';
import Select from 'components/select/select';
import {INITIAL_PLANNER_FILTERS, PlannerFiltersContext} from 'views/tripPlanner/helpers';

const CountryFilter = ({countries}: CountryFilterProps) => {
  const {selectedFilters, updateSelectedFilters} = useContext(PlannerFiltersContext);

  const handleCountryFilterChange: ChangeEventHandler<HTMLSelectElement> = event => {
    updateSelectedFilters({
      country: event.target.value,
      city: INITIAL_PLANNER_FILTERS.city,
      date: INITIAL_PLANNER_FILTERS.date,
    });
  };

  return (
    <FormField title="Country">
      <Select
        options={countries}
        value={selectedFilters.country}
        onChange={handleCountryFilterChange}
        placeholder="Choose the country"
      />
    </FormField>
  );
};

export default CountryFilter;
