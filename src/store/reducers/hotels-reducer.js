import {HOTELS, HOTEL_OFFER, HOTELS_NEARBY} from '../actions/action-types';
import {extend} from "../../utils";

const initialState = {
  hotels: [],
  offer: null,
  nearby: null,
};

const hotelReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOTELS:
      return extend(state, {
        hotels: action.hotels,
      });
    case HOTEL_OFFER:
      return extend(state, {
        offer: action.offer,
      });
    case HOTELS_NEARBY:
      return extend(state, {
        nearby: action.nearby,
      });

    default:
      return state;
  }
};

export default hotelReducer;
