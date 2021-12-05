import {MAX_DATES_TO_DISPLAY} from './dateFilter';

const DATE_BUTTON_WIDTH_CSS_PROPERTY = '--date-button-width';
const DATE_BUTTON_GAP_CSS_PROPERTY = '--date-button-gap';

export const calculateMaxDatesToDisplay = (datePickerContainer: HTMLDivElement) => {
  const {width} = datePickerContainer.getBoundingClientRect();
  const datePickerComputedStyle = getComputedStyle(datePickerContainer);
  const dateButtonWidth = parseInt(datePickerComputedStyle.getPropertyValue(DATE_BUTTON_WIDTH_CSS_PROPERTY));
  const dateButtonGap = parseInt(datePickerComputedStyle.getPropertyValue(DATE_BUTTON_GAP_CSS_PROPERTY));
  const datesAmountToDisplay = Math.floor(width / (dateButtonWidth + dateButtonGap));

  return datesAmountToDisplay > MAX_DATES_TO_DISPLAY ? MAX_DATES_TO_DISPLAY : datesAmountToDisplay;
};
