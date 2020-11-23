import reviewsReducer from "./reviews-reducer";
import {REVIEWS, USER_REVIEW, USER_RATING, REVIEW_LOADING, REVIEW_LOADING_ERROR} from "../../store/actions/action-types";

describe(`Test reviews-reducer`, () => {

  test(`Reducer without additional parameters should return initial state`, () => {
    expect(reviewsReducer(void 0, {})).toEqual({
      reviews: null,
      reviewsCount: null,
      review: null,
      rating: null,
      isLoading: false,
      isError: false
    });
  });

  test(`Reducer should update state`, () => {
    const reviewsArray = [{data: `data`}];
    const reviewsCountNumber = reviewsArray.length;
    const review = {data: `data`};
    const rating = 5;
    const isLoading = true;
    const isError = true;

    expect(reviewsReducer({}, {
      type: REVIEWS,
      reviews: reviewsArray,
      reviewsCount: reviewsCountNumber
    })).toEqual({
      reviews: reviewsArray,
      reviewsCount: reviewsCountNumber
    });

    expect(reviewsReducer({}, {
      type: USER_REVIEW,
      review,
    })).toEqual({
      review,
    });

    expect(reviewsReducer({}, {
      type: USER_RATING,
      rating,
    })).toEqual({
      rating,
    });

    expect(reviewsReducer({}, {
      type: REVIEW_LOADING,
      isLoading,
    })).toEqual({
      isLoading,
    });

    expect(reviewsReducer({}, {
      type: REVIEW_LOADING_ERROR,
      isError,
    })).toEqual({
      isError,
    });
  });

  test(`Reducer should not update state`, () => {
    const state = {state: `state`};
    const defaultType = ``;

    expect(reviewsReducer({state}, {
      type: defaultType,
    })).toEqual({
      state,
    });
  });
});
