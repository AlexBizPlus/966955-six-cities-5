import cityReducer from "./city-reducer";
import {ACTIVE_CITY} from "../../store/actions/action-types";

describe(`Test city-reducer`, () => {

  test(`Reducer without additional parameters should return initial state`, () => {
    const citiesList = [`Paris`];

    expect(cityReducer(void 0, {})).toEqual({
      activeCity: citiesList[0]
    });
  });

  test(`Reducer should update state`, () => {
    const activeCity = `Paris`;

    expect(cityReducer({}, {
      type: ACTIVE_CITY,
      activeCity,
    })).toEqual({
      activeCity
    });
  });

  test(`Reducer should not update state`, () => {
    const state = {state: `state`};
    const defaultType = ``;

    expect(cityReducer({state}, {
      type: defaultType,
    })).toEqual({
      state,
    });
  });
});
