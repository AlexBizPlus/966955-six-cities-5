import {fetchHotelsAction, hotelSortAction, hotelsListUpdateAction} from "../../store/actions/hotel-actions";

export const mapStateToProps = ({HOTELS, CITY, USER}) => {
  return {
    sort: HOTELS.sort,
    hotels: HOTELS.hotels,
    update: HOTELS.update,
    activeCity: CITY.activeCity,
    login: USER.login,
    unsorted: HOTELS.unsorted
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchHotelsAction: (hotels) => dispatch(fetchHotelsAction(hotels)),
    hotelSortAction: (sort) => dispatch(hotelSortAction(sort)),
    hotelsListUpdateAction: (sort) => dispatch(hotelsListUpdateAction(sort)),
  };
};
