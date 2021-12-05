import fetch from 'jest-fetch-mock';
import {fetchLocations} from './locations';

describe('Locations', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should throw an error with correct message', () => {
    fetch.mockRejectOnce(new Error());

    fetchLocations().catch(error => {
      expect(error.message).toEqual("Couldn't fetch locations");
    });
  });
});
