const mapStateToProps = ({HOTELS, CITY, MAP}) => {
  return {
    hotels: HOTELS.hotels,
    nearby: HOTELS.nearby,
    offer: HOTELS.offer,
    activeCity: CITY.activeCity,
    hover: MAP.hover,
  };
};

export default mapStateToProps;
