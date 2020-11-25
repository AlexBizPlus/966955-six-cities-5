import React, {useEffect} from "react";
import {Switch, Route, Router, Redirect} from "react-router-dom";
import {useDispatch} from "react-redux";
import {checkAuthAction} from "@actions/user-actions";
import {Routes} from "../../const";
import Main from "../main/main";
import Login from "../login/login";
import browserHistory from "../../browser-history";
import Favorites from "../favorites/favorites";
import Offer from "../offer/offer";
import PrivateRoute from "../private-route/private-route";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthAction());
  }, []);

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={Routes.HOME} component={Main} />
        <Route exact path={Routes.LOGIN} component={Login} />
        <PrivateRoute exact path={Routes.FAVORITES} component={Favorites} />
        <Route exact path={`${Routes.OFFER}/:id`} component={Offer} />
        <Redirect to={Routes.HOME} component={Main} />
      </Switch>
    </Router>
  );
};

export default App;
