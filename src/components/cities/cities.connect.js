import {setActiveCity} from "../../store/actions/city-actions";

const mapDispatchToProps = (dispatch) => {
  return {setActiveCity: (city) => dispatch(setActiveCity(city))};
};

export default mapDispatchToProps;
