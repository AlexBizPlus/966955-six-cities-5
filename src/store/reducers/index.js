import {combineReducers} from 'redux';
import hotelReducer from './hotels-reducer';
import cityReducer from './city-reducer';
import reviewsReducer from './reviews-reducer';

export default combineReducers({
  hotels: hotelReducer,
  city: cityReducer,
  reviews: reviewsReducer,
});
