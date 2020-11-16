import {HOTELS, HOTELS_UPDATE, HOTEL_OFFER, HOTELS_NEARBY, HOTEL_UPDATE, HOTELS_SORT} from './action-types';
import {APIRoute} from '../../api/const';
import {SortList} from 'const';

export const fetchHotelsAction = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      dispatch(hotelsResolveAction(data));
    })
);

export const hotelsResolveAction = (hotels) => ({
  type: HOTELS,
  hotels,
  unsorted: hotels
});

export const hotelsUpdateAction = (hotels) => ({
  type: HOTELS_UPDATE,
  hotels,
});

export const hotelUpdateAction = (update = 1) => ({
  type: HOTEL_UPDATE,
  update
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

export const hotelSortAction = (sort = SortList[0].id) => ({
  type: HOTELS_SORT,
  sort
});
