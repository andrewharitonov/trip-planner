import {HTMLAttributes} from 'react';

type OwnDatePickerProps = {
  dates: string[];
  selectedDate?: string;
  onDateChange: (value: string) => void;
  disabled?: boolean;
};

export type DatePickerProps = OwnDatePickerProps & HTMLAttributes<HTMLDivElement>;

export type ParsedDate = {
  month: number;
  date: number;
  weekdayName: string;
  fullDate: string;
};
