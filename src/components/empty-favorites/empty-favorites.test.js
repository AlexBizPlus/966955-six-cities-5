import React from "react";
import renderer from "react-test-renderer";
import EmptyFavorites from "./empty-favorites";

describe(`Render EmptyFavorites`, () => {
  test(`Render EmptyFavorites`, () => {
    const tree = renderer
      .create(
          <EmptyFavorites />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
