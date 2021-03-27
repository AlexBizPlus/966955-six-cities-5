import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {fetchHotelsAction, hotelsListUpdateAction} from "@actions/hotel-actions";
import {setActiveCity} from "@actions/city-actions";
import {Routes, CITIES_LIST} from '@const';
import EmptyFavorites from "@emptyFavorites";
import Cards from "@cards";

const Favorites = () => {

  const login = useSelector((state) => state.USER.login);
  const offers = useSelector((state) => state.HOTELS.hotels);
  const update = useSelector((state) => state.HOTELS.update);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHotelsAction());
  }, []);

  useEffect(() => {
    dispatch(hotelsListUpdateAction(offers));
  }, [update]);

  if (!offers) {
    return (<div className="spinner" />);
  }

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={Routes.HOME}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={Routes.FAVORITES}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">
                      {login}
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {
            offers.filter((item) => item.is_favorite).length === 0
              ? <EmptyFavorites />
              : (<section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  { CITIES_LIST.map((city) => {
                    const offersList = offers.filter((item) => item.city.name === city && item.is_favorite);

                    if (offersList.length === 0) {
                      return <div key={city}/>;
                    }
                    return (
                      <li className="favorites__locations-items" key={city}>
                        <div className="favorites__locations locations locations--current">
                          <div className="locations__item">
                            <Link
                              className="locations__item-link"
                              to={Routes.HOME}
                              onClick={() => {
                                dispatch(setActiveCity(city));
                              }}>
                              <span>{city}</span>
                            </Link>
                          </div>
                        </div>
                        <div className="favorites__places">
                          <Cards
                            offers={offersList}
                            classes={[`favorites__card`, `place-card`]}
                            style={`favorites`}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </section>)}
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={Routes.HOME}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
};

export default Favorites;
