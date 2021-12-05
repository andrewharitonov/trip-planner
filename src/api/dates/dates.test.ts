import fetch from 'jest-fetch-mock';
import {fetchAvailableDates} from './dates';

describe('Dates', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should throw an error with correct message', () => {
    fetch.mockRejectOnce(new Error());

    fetchAvailableDates().catch(error => {
      expect(error.message).toEqual("Couldn't fetch available dates");
    });
  });
});
