import {userReducer} from "./user-reducer";
import {AuthorizationStatus} from "../../const";
import {REQUIRED_AUTHORIZATION, SAVE_LOGIN} from "../../store/actions/action-types";

describe(`Test user-reducer`, () => {

  test(`Reducer without additional parameters should return initial state`, () => {
    expect(userReducer(void 0, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      login: `Sign In`
    });
  });

  test(`Reducer should update authorizationStatus to "auth"`, () => {
    expect(userReducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: REQUIRED_AUTHORIZATION,
      status: AuthorizationStatus.AUTH
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH
    });
  });

  test(`Reducer should update state "login"`, () => {
    const userMail = `user@userdomaim.com`;

    expect(userReducer({}, {
      type: SAVE_LOGIN,
      login: userMail
    })).toEqual({
      login: userMail
    });

    expect(userReducer({
      authorizationStatus: AuthorizationStatus.AUTH,
      login: `Sign In`
    }, {
      type: SAVE_LOGIN,
      login: userMail
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      login: userMail
    });
  });
});
