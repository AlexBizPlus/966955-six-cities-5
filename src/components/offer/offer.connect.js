import {fetchHotelNearbyAction, fetchHotelOfferAction} from "../../store/actions/hotel-actions";
import {fetchReviewsAction} from "../../store/actions/reviews-actions";
import {favoriteAction} from "../../store/actions/user-actions";

export const mapStateToProps = ({HOTELS, USER, REVIEWS}) => {
  return {
    offer: HOTELS.offer,
    nearby: HOTELS.nearby,
    update: HOTELS.update,
    login: USER.login,
    reviewsCount: REVIEWS.reviewsCount,
    reviews: REVIEWS.reviews
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchHotelOfferAction: (offer) => dispatch(fetchHotelOfferAction(offer)),
    fetchReviewsAction: (reviews) => dispatch(fetchReviewsAction(reviews)),
    fetchHotelNearbyAction: (nearby) => dispatch(fetchHotelNearbyAction(nearby)),
    favoriteAction: ()=> dispatch(favoriteAction()),
  };
};
