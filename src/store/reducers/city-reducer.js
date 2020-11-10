import {ACTIVE_CITY} from '../actions/action-types';
import {CitiesList} from '../../const';
import {extend} from "../../utils";

const initialState = {
  activeCity: CitiesList[0]
};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_CITY:
      return extend(state, {
        activeCity: action.activeCity,
      });

    default:
      return state;
  }
};

export default cityReducer;
