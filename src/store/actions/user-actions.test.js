import {
  requireAuthorizationAction,
  redirectAction,
  saveLoginAction,
  checkAuthAction,
  loginAction,
  favoriteAction
} from "./user-actions";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api/api";
import {APIRoute} from "../../api/const";
import {REQUIRED_AUTHORIZATION, REDIRECT_TO_ROUTE, SAVE_LOGIN} from "./action-types";
import {AuthorizationStatus, Routes} from "../../const";

describe(`Action creators for user-actions work correctly`, () => {
  const api = createAPI(() => { });
  const status = AuthorizationStatus.AUTH;

  test(`Action creator requireAuthorizationAction`, () => {

    expect(requireAuthorizationAction(status)).toEqual({
      type: REQUIRED_AUTHORIZATION,
      status
    });
  });

  test(`Action creator redirectAction`, () => {
    const url = `url`;

    expect(redirectAction(url)).toEqual({
      type: REDIRECT_TO_ROUTE,
      url
    });
  });

  test(`Action creator saveLoginAction`, () => {
    const login = `login@login.test`;

    expect(saveLoginAction(login)).toEqual({
      type: SAVE_LOGIN,
      login
    });
  });

  test(`Action creator checkAuthAction`, () => {

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuthAction();
    const login = `email`;

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, {email: login});

    return checkAuthLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: SAVE_LOGIN,
          login
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: REQUIRED_AUTHORIZATION,
          status
        });
      });
  });

  test(`Action creator loginAction`, () => {
    const password = `password`;
    const email = `email@email.email`;
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginLoader = loginAction({login: email, password});

    apiMock
      .onPost(APIRoute.LOGIN, {email, password})
      .reply(200, {data: `data`});

    return loginLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: REQUIRED_AUTHORIZATION,
          status
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: REDIRECT_TO_ROUTE,
          url: Routes.HOME
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: SAVE_LOGIN,
          login: email
        });
      });
  });

  test(`Action creator favoriteAction`, () => {
    const id = 1;
    const state = {state: `state`};
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteLoader = favoriteAction(id, state);

    apiMock
      .onPost(`${APIRoute.FAVORITE}/${id}/${state}`)
      .reply(200, [{"is_favorite": true}]);

    return favoriteLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(0);
      });
  });
});
