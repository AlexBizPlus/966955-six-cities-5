import {HOTELS, HOTELS_UPDATE, HOTEL_OFFER, HOTELS_NEARBY, HOTEL_UPDATE, HOTELS_SORT} from '../actions/action-types';
import {extend} from "../../utils";
import {SORT_LIST} from "../../const";

const initialState = {
  hotels: [],
  unsorted: [],
  offer: null,
  nearby: null,
  update: 0,
  sort: SORT_LIST[0].id
};

const hotelReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOTELS:
      return extend(state, {
        hotels: action.hotels,
        unsorted: action.hotels,
      });
    case HOTELS_UPDATE:
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
    case HOTEL_UPDATE:
      return extend(state, {
        update: state.update + action.update,
      });
    case HOTELS_SORT:
      return extend(state, {
        sort: action.sort,
      });
    default:
      return state;
  }
};

export default hotelReducer;
