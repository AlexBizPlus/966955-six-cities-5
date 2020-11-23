import {connect} from "react-redux";
import CityMap from "./city-map";

const mapStateToProps = ({HOTELS, CITY, MAP}) => {
  return {
    hotels: HOTELS.hotels,
    nearby: HOTELS.nearby,
    offer: HOTELS.offer,
    activeCity: CITY.activeCity,
    hover: MAP.hover,
  };
};

export default connect(mapStateToProps, null)(CityMap);
