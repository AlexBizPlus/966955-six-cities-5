import {connect} from "react-redux";
import {setActiveCity} from "@actions/city-actions";
import Cities from "./cities";

const mapDispatchToProps = (dispatch) => {
  return {setActiveCity: (city) => dispatch(setActiveCity(city))};
};

const mapStateToProps = ({CITY}) => {
  return {
    activeCity: CITY.activeCity
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
