import {connect} from "react-redux";
import {
  userReviewAction,
  userRatingAction,
  fetchReviewsPostAction,
  reviewLoadingAction,
  reviewErrorAction
} from "../../store/actions/reviews-actions";
import Form from "./form";

const mapStateToProps = ({HOTELS, USER, REVIEWS}) => ({
  authorizationStatus: USER.authorizationStatus,
  offer: HOTELS.offer,
  review: REVIEWS.review,
  rating: REVIEWS.rating,
  isLoading: REVIEWS.isLoading,
  isError: REVIEWS.isError
});

const mapDispatchToProps = (dispatch) => {
  return {
    userReviewAction: (review) => dispatch(userReviewAction(review)),
    userRatingAction: (rating) => dispatch(userRatingAction(rating)),
    fetchReviewsPostAction: (params) => dispatch(fetchReviewsPostAction(params)),
    reviewLoadingAction: (isLoading)=> dispatch(reviewLoadingAction(isLoading)),
    reviewErrorAction: (isError)=> dispatch(reviewErrorAction(isError))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
