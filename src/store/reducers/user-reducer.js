import browserHistory from "../../browser-history";
import {AuthorizationStatus} from "../../const";
import {REDIRECT_TO_ROUTE, REQUIRED_AUTHORIZATION, SAVE_LOGIN} from "../actions/action-types";
import {extend} from "../../utils";

export const redirect = (_store) => (next) => (action) => {

  if (action.type === REDIRECT_TO_ROUTE) {
    browserHistory.push(action.url);
  }

  return next(action);
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  login: `Sign In`
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.status,
      });
    case SAVE_LOGIN:
      return extend(state, {
        login: action.login,
      });
    default:
      return state;
  }
};
