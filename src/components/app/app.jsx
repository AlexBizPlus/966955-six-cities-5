import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "main";
import Login from "login";
import Favorites from "favorites";
import Offer from "offer";
import {myPropTypes as PropTypes} from "../../prop";

const App = ({offers, reviews}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main offers={offers} reviews={reviews}/>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/offer/:id?">
          <Offer offer={offers[0]} reviews={reviews} offers={offers}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.offers,
  reviews: PropTypes.reviews
};

export default App;
