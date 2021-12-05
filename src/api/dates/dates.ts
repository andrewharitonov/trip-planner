import {API_URL} from 'constants/globals';

export type AvailableDates = string[];

export const fetchAvailableDates = async (): Promise<AvailableDates> => {
  try {
    const response = await fetch(`${API_URL}/available_dates`);
    return await response.json();
  } catch {
    throw new Error("Couldn't fetch available dates");
  }
};
