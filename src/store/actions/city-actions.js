import {ACTIVE_CITY} from './action-types';

export const setActiveCity = (city) => ({
  type: ACTIVE_CITY,
  activeCity: city
});
