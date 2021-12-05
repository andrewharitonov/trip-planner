import React, {forwardRef, Fragment, useMemo} from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import {DatePickerProps} from './types';
import {getParsedDates} from './helpers';
import DateButton from '../squareButton/squareButton';
import DateSeparator from './dateSeparator/dateSeparator';

const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>((props, ref) => {
  const {className, selectedDate, onDateChange, disabled, dates, ...htmlProps} = props;

  const parsedDates = useMemo(() => {
    return getParsedDates(dates)
  }, [dates]);

  const datePickerClassName = classNames(className, styles.datePicker);

  return (
    <div ref={ref} className={datePickerClassName} {...htmlProps}>
      {parsedDates.map(({date, weekdayName, month, fullDate}, index) => {
        const nextMonth = parsedDates[index + 1]?.month;
        const showSeparator = nextMonth && nextMonth !== month;
        return (
          <Fragment key={`${fullDate}-${index}`}>
            {showSeparator && <DateSeparator disabled={disabled} data-testid="datepicker-separator" />}
            <DateButton
              className={styles.dateButton}
              title={String(date)}
              active={selectedDate === fullDate}
              description={weekdayName}
              onClick={() => onDateChange(fullDate)}
              disabled={disabled}
              data-testid="datepicker-button"
            />
          </Fragment>
        );
      })}
    </div>
  );
});

export default DatePicker;
