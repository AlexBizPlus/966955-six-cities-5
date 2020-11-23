import {combineReducers} from 'redux';
import hotelReducer from './hotels-reducer';
import cityReducer from './city-reducer';
import reviewsReducer from './reviews-reducer';
import mapReducer from './map-reducer';
import {userReducer} from './user-reducer';

export default combineReducers({
  HOTELS: hotelReducer,
  CITY: cityReducer,
  REVIEWS: reviewsReducer,
  MAP: mapReducer,
  USER: userReducer,
});
