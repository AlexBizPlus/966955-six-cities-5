import {connect} from "react-redux";
import EmptyMain from "./empty-main";

const mapStateToProps = ({CITY}) => {
  return {
    activeCity: CITY.activeCity,
  };
};

export default connect(mapStateToProps, null)(EmptyMain);
