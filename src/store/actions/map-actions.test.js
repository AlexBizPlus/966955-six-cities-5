import {hoverHotelAction} from "./map-actions";
import {HOTEL_HOVER} from './action-types';

describe(`Action creators for map-actions work correctly`, () => {
  const hover = [1, 1];

  test(`Action creator hoverHotelAction`, () => {
    expect(hoverHotelAction(hover)).toEqual({
      type: HOTEL_HOVER,
      hover
    });
  });
});
