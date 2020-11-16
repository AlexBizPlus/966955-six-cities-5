import {REVIEWS, USER_REVIEW, USER_RATING, REVIEW_LOADING, REVIEW_LOADING_ERROR} from '../actions/action-types';
import {extend} from "utils";
import {MAX_COMMENTS} from 'const';

const initialState = {
  reviews: null,
  reviewsCount: null,
  review: null,
  rating: null,
  isLoading: false,
  isError: false
};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REVIEWS:
      return extend(state, {
        reviews: action.reviews.sort().reverse().slice(0, MAX_COMMENTS),
        reviewsCount: action.reviews.length
      });
    case USER_REVIEW:
      return extend(state, {
        review: action.review,
      });
    case USER_RATING:
      return extend(state, {
        rating: action.rating,
      });
    case REVIEW_LOADING:
      return extend(state, {
        isLoading: action.isLoading,
      });
    case REVIEW_LOADING_ERROR:
      return extend(state, {
        isError: action.isError,
      });
    default:
      return state;
  }
};

export default reviewsReducer;
