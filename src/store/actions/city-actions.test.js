import {setActiveCity} from "./city-actions";
import {ACTIVE_CITY} from './action-types';

describe(`Action creators for city-actions work correctly`, () => {
  const city = `Paris`;

  test(`Action creator setActiveCity`, () => {
    expect(setActiveCity(city)).toEqual({
      type: ACTIVE_CITY,
      activeCity: city
    });
  });
});
