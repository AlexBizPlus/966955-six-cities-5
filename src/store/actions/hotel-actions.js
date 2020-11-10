import {HOTELS, HOTEL_OFFER, HOTELS_NEARBY} from './action-types';
import {APIRoute} from '../../api/const';

export const fetchHotelsAction = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      dispatch(hotelsResolveAction(data));
    })
);

export const hotelsResolveAction = (hotels) => ({
  type: HOTELS,
  hotels
});

export const fetchHotelOfferAction = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}`)
    .then(({data}) => {
      dispatch(hotelOfferResolveAction(data));
    })
);

export const hotelOfferResolveAction = (offer) => ({
  type: HOTEL_OFFER,
  offer
});

export const fetchHotelNearbyAction = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}/nearby`)
    .then(({data}) => {
      dispatch(hotelNearbyResolveAction(data));
    })
);

export const hotelNearbyResolveAction = (nearby) => ({
  type: HOTELS_NEARBY,
  nearby
});
