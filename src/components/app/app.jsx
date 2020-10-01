import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main";

const App = ({rentalOffersNumber}) => {
  return <Main rentalOffersNumber={rentalOffersNumber} />;
};

App.propTypes = {
  rentalOffersNumber: PropTypes.number.isRequired,
};

export default App;
