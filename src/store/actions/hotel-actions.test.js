import {
  fetchHotelsAction,
  hotelsResolveAction,
  hotelsListUpdateAction,
  hotelUpdateAction,
  fetchHotelOfferAction,
  hotelOfferResolveAction,
  fetchHotelNearbyAction,
  hotelNearbyResolveAction,
  hotelSortAction
} from "./hotel-actions";
import {HOTELS, HOTELS_UPDATE, HOTEL_OFFER, HOTELS_NEARBY, HOTEL_UPDATE, HOTELS_SORT} from './action-types';
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api/api";
import {APIRoute} from "../../api/const";

describe(`Action creators for hotel-actions work correctly`, () => {
  const api = createAPI(() => { });
  const hotels = [{city: `Paris`, bedrooms: 1}];
  const hotel = [{city: `Paris`, bedrooms: 1}];

  test(`Action creator fetchHotelsAction`, () => {

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchHotelsLoader = fetchHotelsAction();

    apiMock
      .onGet(APIRoute.HOTELS)
      .reply(200, hotels);

    return fetchHotelsLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: HOTELS,
          hotels,
          unsorted: hotels
        });
      });
  });

  test(`Action creator hoverHotelAction`, () => {
    expect(hotelsResolveAction(hotels)).toEqual({
      type: HOTELS,
      hotels,
      unsorted: hotels
    });
  });

  test(`Action creator hotelsListUpdateAction`, () => {
    expect(hotelsListUpdateAction(hotels)).toEqual({
      type: HOTELS_UPDATE,
      hotels,
    });
  });

  test(`Action creator hotelUpdateAction`, () => {
    const update = 1;

    expect(hotelUpdateAction(update)).toEqual({
      type: HOTEL_UPDATE,
      update,
    });
  });

  test(`Action creator fetchHotelOfferAction`, () => {

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const fetchHotelOffer = fetchHotelOfferAction(id);

    apiMock
      .onGet(`${APIRoute.HOTELS}/${id}`)
      .reply(200, hotel);

    return fetchHotelOffer(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: HOTEL_OFFER,
          offer: hotel
        });
      });
  });

  test(`Action creator hotelOfferResolveAction`, () => {
    expect(hotelOfferResolveAction(hotel)).toEqual({
      type: HOTEL_OFFER,
      offer: hotel
    });
  });

  test(`Action creator fetchHotelNearbyAction`, () => {

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const fetchHotelNearby = fetchHotelNearbyAction(id);

    apiMock
      .onGet(`${APIRoute.HOTELS}/${id}/nearby`)
      .reply(200, hotels);

    return fetchHotelNearby(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: HOTELS_NEARBY,
          nearby: hotels
        });
      });
  });

  test(`Action creator hotelNearbyResolveAction`, () => {
    expect(hotelNearbyResolveAction(hotel)).toEqual({
      type: HOTELS_NEARBY,
      nearby: hotels
    });
  });

  test(`Action creator hotelSortAction`, () => {
    const sort = `popular`;

    expect(hotelSortAction(sort)).toEqual({
      type: HOTELS_SORT,
      sort,
    });
  });
});
