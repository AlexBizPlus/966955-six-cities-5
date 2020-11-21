import {hoverHotelAction} from "../../store/actions/map-actions";
import {hotelUpdateAction} from "../../store/actions/hotel-actions";
import {favoriteAction} from "../../store/actions/user-actions";

const mapDispatchToProps = (dispatch) => {
  return {
    hoverHotelAction: (hover) => dispatch(hoverHotelAction(hover)),
    hotelUpdateAction: () => dispatch(hotelUpdateAction()),
    favoriteAction: ()=> dispatch(favoriteAction())
  };
};

export default mapDispatchToProps;
