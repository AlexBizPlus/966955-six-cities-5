import React from "react";
import {Switch, Route, Router, Redirect} from "react-router-dom";
import {Routes} from "const";
import Main from "main";
import Login from "login";
import browserHistory from "../../browser-history";
import Favorites from "favorites";
import Offer from "offer";
import PrivateRoute from "../private-route/private-route";
import {myPropTypes as PropTypes} from "prop";

const App = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={Routes.HOME} component={Main} />
        <Route exact path={Routes.LOGIN} component={Login} />
        <PrivateRoute exact path={Routes.FAVORITES} component={Favorites} />
        <Route exact path={ `${Routes.OFFER}/:id`} component={Offer} />
        <Redirect to={Routes.HOME} component={Main} />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  offers: PropTypes.offers,
  reviews: PropTypes.reviews
};

export default App;
