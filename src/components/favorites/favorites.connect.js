import {connect} from "react-redux";
import {fetchHotelsAction, hotelsListUpdateAction} from "@actions/hotel-actions";
import Favorites from "./favorites";
import {setActiveCity} from "@actions/city-actions";

const mapStateToProps = ({HOTELS, USER}) => {
  return {
    hotels: HOTELS.hotels,
    update: HOTELS.update,
    login: USER.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHotelsAction: (hotels) => dispatch(fetchHotelsAction(hotels)),
    hotelsListUpdateAction: (hotels) => dispatch(hotelsListUpdateAction(hotels)),
    setActiveCity: (city) => dispatch(setActiveCity(city))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
