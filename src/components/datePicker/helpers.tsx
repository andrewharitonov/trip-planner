import {ParsedDate} from './types';
import {SHORT_WEEKDAY_NAMES} from 'constants/globals';

export const getShortWeekdayNameByIndex = (index: number) => {
  if (index >= SHORT_WEEKDAY_NAMES.length) {
    return 'Invalid weekday';
  }
  return SHORT_WEEKDAY_NAMES[index];
};

export const getParsedDates = (dates: string[]): ParsedDate[] => {
  return dates.reduce<ParsedDate[]>((parsedDates, dateToParse) => {
    const timestamp = Date.parse(dateToParse);
    if (!timestamp) {
      return parsedDates;
    }

    const dateObject = new Date(timestamp);
    const date = Number(dateObject.getDate());
    const weekdayName = getShortWeekdayNameByIndex(dateObject.getDay());
    const month = Number(dateObject.getMonth()) + 1;
    return [...parsedDates, {date, weekdayName, month, fullDate: dateToParse}];
  }, []);
};
