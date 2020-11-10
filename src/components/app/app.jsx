import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "main";
import Login from "login";
import Favorites from "favorites";
import Offer from "offer";
import {myPropTypes as PropTypes} from "../../prop";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main}>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/offer/:id" component={Offer} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.offers,
  reviews: PropTypes.reviews
};

export default App;
