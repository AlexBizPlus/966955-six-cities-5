import {fetchHotelsAction, hotelsListUpdateAction} from "../../store/actions/hotel-actions";
import {setActiveCity} from "../../store/actions/city-actions";

export const mapStateToProps = ({HOTELS, USER}) => {
  return {
    hotels: HOTELS.hotels,
    update: HOTELS.update,
    login: USER.login,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchHotelsAction: (hotels) => dispatch(fetchHotelsAction(hotels)),
    hotelsListUpdateAction: (hotels) => dispatch(hotelsListUpdateAction(hotels)),
    setActiveCity: (city) => dispatch(setActiveCity(city))
  };
};
