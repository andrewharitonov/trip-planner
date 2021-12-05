import React from 'react';
import {TripPlannerFilters, TripPlannerFiltersContext} from './types';

export const INITIAL_PLANNER_FILTERS: TripPlannerFilters = {date: '', city: '', country: ''};

export const PlannerFiltersContext = React.createContext<TripPlannerFiltersContext>({
  selectedFilters: INITIAL_PLANNER_FILTERS,
  updateSelectedFilters: () => {},
});
