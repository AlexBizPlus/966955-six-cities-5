import {connect} from "react-redux";
import {hoverHotelAction} from "@actions/map-actions";
import {hotelUpdateAction} from "@actions/hotel-actions";
import {favoriteAction} from "@actions/user-actions";
import Card from "./card";

const mapDispatchToProps = (dispatch) => {
  return {
    hoverHotelAction: (hover) => dispatch(hoverHotelAction(hover)),
    hotelUpdateAction: () => dispatch(hotelUpdateAction()),
    favoriteAction: ()=> dispatch(favoriteAction())
  };
};

export default connect(null, mapDispatchToProps)(Card);
