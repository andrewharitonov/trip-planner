import React, {useContext, useRef, useState} from 'react';
import styles from './styles.module.scss';
import {DateFilterProps} from './types';
import FormField from 'components/formField/formFIeld';
import DatePicker from 'components/datePicker/datePicker';
import {useWindowResize} from 'hooks/useWindowResize';
import {calculateMaxDatesToDisplay} from './helpers';
import {PlannerFiltersContext} from 'views/tripPlanner/helpers';

export const MAX_DATES_TO_DISPLAY = 7;

const DateFilter = ({dates}: DateFilterProps) => {
  const {selectedFilters, updateSelectedFilters} = useContext(PlannerFiltersContext);
  const [maxDatesToDisplay, setMaxDatesToDisplay] = useState(MAX_DATES_TO_DISPLAY);
  const datePickerRef = useRef<HTMLDivElement>(null);

  // If element's layout calculations needed, use ResizeObserver instead
  useWindowResize(() => {
    if (!datePickerRef.current) {
      return;
    }
    setMaxDatesToDisplay(calculateMaxDatesToDisplay(datePickerRef.current));
  });

  const datesToDisplay = dates.slice(0, maxDatesToDisplay);

  return (
    <FormField title="Date" disabled={!selectedFilters.city}>
      <DatePicker
        ref={datePickerRef}
        className={styles.dateFilter}
        dates={datesToDisplay}
        selectedDate={selectedFilters.date}
        onDateChange={value => updateSelectedFilters({date: value})}
        disabled={!selectedFilters.city}
      />
    </FormField>
  );
};

export default DateFilter;
