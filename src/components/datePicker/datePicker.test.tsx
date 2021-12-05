import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import DatePicker from './datePicker';
import {getParsedDates, getShortWeekdayNameByIndex} from './helpers';

const datePickerProps = {
  dates: ['2021-07-30', '2021-07-31', '2021-08-07'],
  onDateChange: () => {},
};

describe('DatePicker', () => {
  describe('Dates separator', () => {
    it('should be hidden if all dates have the same month', () => {
      const dates = ['2021-07-10', '2021-07-11', '2021-07-12'];
      const {queryByTestId} = render(<DatePicker {...datePickerProps} dates={dates} />);
      const separator = queryByTestId('datepicker-separator');
      expect(separator).not.toBeInTheDocument();
    });

    it('should be rendered datepicker has different months', () => {
      const {getByTestId} = render(<DatePicker {...datePickerProps} />);
      const separator = getByTestId('datepicker-separator');
      expect(separator).toBeInTheDocument();
    });
  });

  describe('Date buttons', () => {
    it('should render the same amount of buttons as dates length', () => {
      const {getAllByTestId} = render(<DatePicker {...datePickerProps} />);
      const dateButtons = getAllByTestId('datepicker-button');
      expect(dateButtons.length).toEqual(datePickerProps.dates.length);
    });

    it('should set active class to currently selected date', () => {
      const {getByText} = render(<DatePicker {...datePickerProps} selectedDate="2021-07-31" />);
      const selectedDateButton = getByText('31').closest('[data-testid="datepicker-button"]');
      expect(selectedDateButton).toHaveClass('active');
    });

    it('should be disabled if datepicker is disabled', () => {
      const {getByText} = render(<DatePicker {...datePickerProps} disabled />);
      const selectedDateButton = getByText('31').closest('[data-testid="datepicker-button"]');
      expect(selectedDateButton).toBeDisabled();
    });

    it('should call onDateChange with proper date value on click', () => {
      const onDateChangeMock = jest.fn();
      const {getAllByTestId} = render(<DatePicker {...datePickerProps} onDateChange={onDateChangeMock} />);
      const dateButton = getAllByTestId('datepicker-button')[0];
      expect(dateButton).not.toHaveClass('active');

      fireEvent.click(dateButton);
      expect(onDateChangeMock).toHaveBeenCalledWith(datePickerProps.dates[0]);
    });
  });

  describe('Helpers', () => {
    describe('getShortWeekdayNameByIndex', () => {
      it('should return invalid weekday message', () => {
        const result = getShortWeekdayNameByIndex(10);
        expect(result).toEqual('Invalid weekday');
      });

      it('should return proper weekday name', () => {
        const result = getShortWeekdayNameByIndex(1);
        expect(result).toEqual('Mon');
      });
    });

    describe('getParsedDates', () => {
      it('should correctly parse valid dates and skip invalid', () => {
        const dates = [...datePickerProps.dates, 'some-invalid-date', '2021-09-08'];
        const result = getParsedDates(dates);
        const expectedResult = [
          {date: 30, fullDate: '2021-07-30', month: 7, weekdayName: 'Fri'},
          {date: 31, fullDate: '2021-07-31', month: 7, weekdayName: 'Sat'},
          {date: 7, fullDate: '2021-08-07', month: 8, weekdayName: 'Sat'},
          {date: 8, fullDate: '2021-09-08', month: 9, weekdayName: 'Wed'},
        ];

        expect(result).toEqual(expectedResult);
      });
    });
  });
});
