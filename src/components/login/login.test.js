import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Login from './login';
import {Router} from "react-router-dom";
import {createBrowserHistory} from "history";


describe(`Render Login component`, () => {

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
        "city": {
          "location": {
            "latitude": 1,
            "longitude": 1,
            "zoom": 1,
          },
        },
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

  test(`Render Login`, () => {
    const store = mockStore(initialStore);

    store.dispatch = jest.fn();

    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={browserHistory}>
              <Login />
            </Router>
          </Provider>
      );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
