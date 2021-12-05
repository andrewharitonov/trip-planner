export type TripPlannerFilters = {
  country: string;
  city: string;
  date: string;
};

export type TripPlannerFiltersContext = {
  selectedFilters: TripPlannerFilters;
  updateSelectedFilters: (filters: Partial<TripPlannerFilters>) => void;
};
