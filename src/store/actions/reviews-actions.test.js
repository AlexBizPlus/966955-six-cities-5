import {
  fetchReviewsAction,
  reviewsResolveAction,
  userReviewAction,
  userRatingAction,
  reviewLoadingAction,
  reviewErrorAction,
  fetchReviewsPostAction
} from "./reviews-actions";
import {REVIEWS, USER_REVIEW, USER_RATING, REVIEW_LOADING, REVIEW_LOADING_ERROR} from './action-types';
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api/api";
import {APIRoute} from '../../api/const';

describe(`Action creators for reviews-actions work correctly`, () => {
  const api = createAPI(() => { });
  const reviews = [{user: `one`, text: `text`}];
  const review = {user: `one`, text: `text`};
  const rating = 1;

  test(`Action creator fetchReviewsAction`, () => {

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const fetchReviewsLoader = fetchReviewsAction(id);

    apiMock
      .onGet(`${APIRoute.REVIEWS}/${id}`)
      .reply(200, reviews);

    return fetchReviewsLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: REVIEWS,
          reviews
        });
      });
  });

  test(`Action creator reviewsResolveAction`, () => {
    expect(reviewsResolveAction(reviews)).toEqual({
      type: REVIEWS,
      reviews
    });
  });

  test(`Action creator userReviewAction`, () => {
    expect(userReviewAction(review)).toEqual({
      type: USER_REVIEW,
      review
    });
  });

  test(`Action creator userRatingAction`, () => {

    expect(userRatingAction(rating)).toEqual({
      type: USER_RATING,
      rating
    });
  });

  test(`Action creator reviewLoadingAction`, () => {
    const isLoading = true;

    expect(reviewLoadingAction(isLoading)).toEqual({
      type: REVIEW_LOADING,
      isLoading
    });
  });

  test(`Action creator reviewErrorAction`, () => {
    const isError = true;

    expect(reviewErrorAction(isError)).toEqual({
      type: REVIEW_LOADING_ERROR,
      isError
    });
  });

  test(`Action creator fetchReviewsPostAction`, () => {

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const fetchReviewsPostLoader = fetchReviewsPostAction(id, {comment: review, rating});

    apiMock
      .onPost(`${APIRoute.REVIEWS}/${id}`, {"comment": review, "rating": rating})
      .reply(200, reviews);

    return fetchReviewsPostLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: REVIEWS,
          reviews
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: REVIEW_LOADING,
          isLoading: false,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: USER_REVIEW,
          review: null,
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: USER_RATING,
          rating: null,
        });
      });
  });
});
