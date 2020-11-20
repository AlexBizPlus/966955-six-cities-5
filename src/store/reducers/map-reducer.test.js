import mapReducer from "./map-reducer";
import {HOTEL_HOVER} from "../../store/actions/action-types";

describe(`Test map-reducer`, () => {

  test(`Reducer without additional parameters should return initial state`, () => {
    expect(mapReducer(void 0, {})).toEqual({
      hover: [0, 0],
    });
  });

  test(`Reducer should update state`, () => {
    const coords = [1, 1];

    expect(mapReducer({}, {
      type: HOTEL_HOVER,
      hover: coords
    })).toEqual({
      hover: coords
    });
  });

  test(`Reducer should not update state`, () => {
    const state = {state: `state`};
    const defaultType = ``;

    expect(mapReducer({state}, {
      type: defaultType,
    })).toEqual({
      state,
    });
  });
});
