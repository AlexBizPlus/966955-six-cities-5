import {REVIEWS} from '../actions/action-types';
import {extend} from "../../utils";

const initialState = {
  reviews: null
};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REVIEWS:
      return extend(state, {
        reviews: action.reviews,
      });

    default:
      return state;
  }
};

export default reviewsReducer;
