import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import App from "@app";

describe(`Render App component`, () => {

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
      offer: {},
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

  test(`Render App`, () => {
    const store = mockStore(initialStore);

    store.dispatch = jest.fn();

    const tree = renderer
      .create(
          <Provider store={store}>
            <App />
          </Provider>
      );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
