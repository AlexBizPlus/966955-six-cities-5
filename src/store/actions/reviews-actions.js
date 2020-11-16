import {REVIEWS, USER_REVIEW, USER_RATING, REVIEW_LOADING, REVIEW_LOADING_ERROR} from './action-types';
import {APIRoute} from '../../api/const';

export const fetchReviewsAction = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${id}`)
    .then(({data}) => {
      dispatch(reviewsResolveAction(data));
    })
);

export const reviewsResolveAction = (reviews) => ({
  type: REVIEWS,
  reviews
});

export const userReviewAction = (review) => ({
  type: USER_REVIEW,
  review
});

export const userRatingAction = (rating) => ({
  type: USER_RATING,
  rating
});

export const reviewLoadingAction = (isLoading = false) => ({
  type: REVIEW_LOADING,
  isLoading
});

export const reviewErrorAction = (isError = true) => ({
  type: REVIEW_LOADING_ERROR,
  isError
});

export const fetchReviewsPostAction = (id, {comment: review, rating}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${id}`, {"comment": review, "rating": rating})
    .then(({data}) => {
      dispatch(reviewsResolveAction(data));
      dispatch(reviewLoadingAction());
      dispatch(userReviewAction(null));
      dispatch(userRatingAction(null));
    })
    .catch(()=>{
      dispatch(reviewLoadingAction(true));
      dispatch(reviewErrorAction());
    })
);
