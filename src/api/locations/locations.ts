import {API_URL} from 'constants/globals';

export type Locations = {
  [key: string]: [number, string][];
};

export const fetchLocations = async (): Promise<Locations> => {
  try {
    const response = await fetch(`${API_URL}/locations`);
    return await response.json();
  } catch {
    throw new Error("Couldn't fetch locations");
  }
};
