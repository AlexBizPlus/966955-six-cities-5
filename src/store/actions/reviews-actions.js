import {REVIEWS} from './action-types';
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
