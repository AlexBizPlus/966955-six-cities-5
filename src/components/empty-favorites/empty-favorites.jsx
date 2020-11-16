import React from "react";

const EmptyFavorites = () => {
  return (
    <section className="favorites">
      <h1 className="visually-hidden">Favorites (empty)</h1>
      <div className="favorites__status-wrapper">
        <b className="favorites__status">Nothing yet saved.</b>
        <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
      </div>
    </section>
  );
};

export default EmptyFavorites;
