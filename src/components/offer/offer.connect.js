import {connect} from "react-redux";
import {fetchHotelNearbyAction, fetchHotelOfferAction, hotelNearbyResolveAction} from "@actions/hotel-actions";
import {fetchReviewsAction} from "@actions/reviews-actions";
import {favoriteAction} from "@actions/user-actions";
import Offer from "./offer";

const mapStateToProps = ({HOTELS, USER, REVIEWS}) => {
  return {
    offer: HOTELS.offer,
    nearby: HOTELS.nearby,
    update: HOTELS.update,
    login: USER.login,
    reviewsCount: REVIEWS.reviewsCount,
    reviews: REVIEWS.reviews
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHotelOfferAction: (offer) => dispatch(fetchHotelOfferAction(offer)),
    fetchReviewsAction: (reviews) => dispatch(fetchReviewsAction(reviews)),
    fetchHotelNearbyAction: (nearby) => dispatch(fetchHotelNearbyAction(nearby)),
    hotelNearbyResolveAction: (nearby) => dispatch(hotelNearbyResolveAction(nearby)),
    favoriteAction: ()=> dispatch(favoriteAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Offer);
