import {APIRoute} from "../../api/const";
import {REQUIRED_AUTHORIZATION, REDIRECT_TO_ROUTE, SAVE_LOGIN} from "./action-types";
import {AuthorizationStatus, Routes} from "../../const";

export const requireAuthorizationAction = (status) => ({
  type: REQUIRED_AUTHORIZATION,
  status,
});

export const redirectAction = (url) => ({
  type: REDIRECT_TO_ROUTE,
  url,
});

export const saveLoginAction = (login) => ({
  type: SAVE_LOGIN,
  login,
});

export const checkAuthAction = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((res) => dispatch(saveLoginAction(res.data.email)))
    .then(() => dispatch(requireAuthorizationAction(AuthorizationStatus.AUTH)))
    .catch(() => dispatch(requireAuthorizationAction(AuthorizationStatus.NO_AUTH)))
);

export const loginAction = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorizationAction(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectAction(Routes.HOME)))
    .then(() => dispatch(saveLoginAction(email)))
);

export const favoriteAction = (id, state) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${state}`)
    .then(({data}) => data[`is_favorite`])
    .catch(() => dispatch(redirectAction(Routes.LOGIN)))
);
