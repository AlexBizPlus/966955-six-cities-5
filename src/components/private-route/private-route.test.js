import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import PrivateRoute from "./private-route";
import {Router} from "react-router-dom";
import {createBrowserHistory} from "history";
import Favorites from "../favorites/favorites";

describe(`Render PrivateRoute component`, () => {

  const browserHistory = createBrowserHistory();
  const initialStore = {
    HOTELS: {
      hotels: [{
        "city": {
          "name": `Amsterdam`
        }}],
      unsorted: [{
        "city": {
          "name": `Amsterdam`
        }}],
      offer: {
        "bedrooms": 1,
        "city": {
          "location": {
            "latitude": 1,
            "longitude": 1,
            "zoom": 1,
          },
          "name": `mock`,
        },
        "description": `mock`,
        "goods": [`1`, `2`],
        "host": {
          "avatar_url": `mock`,
          "id": 1,
          "is_pro": true,
          "name": `mock`,
        },
        "id": 1,
        "images": [`1`, `2`],
        "is_favorite": true,
        "is_premium": true,
        "location": {
          "latitude": 1,
          "longitude": 1,
          "zoom": 1,
        },
        "max_adults": 1,
        "preview_image": `mock`,
        "price": 1,
        "rating": 1,
        "title": `mock`,
        "type": `mock`,
      },
      nearby: [{}],
      update: 0,
      sort: `popular`
    },
    CITY: {
      activeCity: `Paris`,
    },
    REVIEWS: {
      reviews: [],
      reviewsCount: 0,
      review: {},
      rating: 5,
      isLoading: true,
      isError: true
    },
    MAP: {
      hover: [0, 0],
    },
    USER: {
      authorizationStatus: `AUTH`,
      login: `q@q.qq`
    }
  };
  const mockStore = configureStore([]);

  test(`Render PrivateRoute`, () => {
    const store = mockStore(initialStore);

    store.dispatch = jest.fn();
    const path = `/component`;

    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={browserHistory}>
              <PrivateRoute
                path={path}
                exact={true}
                component={Favorites}
              />
            </Router>
          </Provider>
      );

    expect(tree.root.props.children.props.children.props.component).toBe(Favorites);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
