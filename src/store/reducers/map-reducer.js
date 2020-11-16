import {HOTEL_HOVER} from '../actions/action-types';
import {extend} from "utils";

const initialState = {
  hover: [0, 0],
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOTEL_HOVER:
      return extend(state, {
        hover: action.hover,
      });
    default:
      return state;
  }
};

export default mapReducer;
