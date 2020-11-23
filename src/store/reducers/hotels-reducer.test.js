import hotelsReducer from "./hotels-reducer";
import {HOTELS, HOTELS_UPDATE, HOTEL_OFFER, HOTELS_NEARBY, HOTEL_UPDATE, HOTELS_SORT} from "../../store/actions/action-types";

describe(`Test hotels-reducer`, () => {

  test(`Reducer without additional parameters should return initial state`, () => {
    const list = [{
      text: `Popular`,
      id: `popular`
    }];

    expect(hotelsReducer(void 0, {})).toEqual({
      hotels: [],
      unsorted: [],
      offer: null,
      nearby: null,
      update: 0,
      sort: list[0].id
    });
  });

  test(`Reducer should update state`, () => {
    const hotels = [{1: `hotel`}, {2: `hotel`}];
    const offer = {offer: `hotel`};
    const nearby = [{5: `hotel`}, {6: `hotel`}, {7: `hotel`}];
    const sort = [{8: `hotel`}, {9: `hotel`}];

    expect(hotelsReducer({}, {
      type: HOTELS,
      hotels,
      unsorted: hotels
    })).toEqual({
      hotels,
      unsorted: hotels
    });

    expect(hotelsReducer({}, {
      type: HOTELS_UPDATE,
      hotels,
    })).toEqual({
      hotels,
    });

    expect(hotelsReducer({}, {
      type: HOTEL_OFFER,
      offer,
    })).toEqual({
      offer,
    });

    expect(hotelsReducer({}, {
      type: HOTELS_NEARBY,
      nearby,
    })).toEqual({
      nearby,
    });

    expect(hotelsReducer({update: 0}, {
      type: HOTEL_UPDATE,
      update: 1,
    })).toEqual({
      update: 1
    });

    expect(hotelsReducer({}, {
      type: HOTELS_SORT,
      sort
    })).toEqual({
      sort
    });
  });

  test(`Reducer should not update state`, () => {
    const state = {state: `state`};
    const defaultType = ``;

    expect(hotelsReducer({state}, {
      type: defaultType,
    })).toEqual({
      state,
    });
  });
});
