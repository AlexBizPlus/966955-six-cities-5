import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import {connect, useSelector, useDispatch} from "react-redux";
import {fetchHotelsAction} from "../../store/actions/hotel-actions";
import {myPropTypes as PropTypes} from "../../prop";
import Cards from "cards";
import CityMap from "cityMap";
import Cities from "cities";

const Main = () => {

  const activeCity = useSelector((state) => state.city.activeCity);
  const offers = useSelector((state) => state.hotels.hotels).filter((item)=>item.city.name === activeCity);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHotelsAction());
  }, [activeCity]);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to="/" className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to="/login"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Cities />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offers.length} places to stay in {activeCity}
              </b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom">
                  <li
                    className="places__option places__option--active"
                    tabIndex="0"
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex="0">
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex="0">
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex="0">
                    Top rated first
                  </li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <Cards offers={offers} classes={[`cities__place-card`, `place-card`]}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <CityMap offers={offers}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  offers: PropTypes.offers,
  reviews: PropTypes.reviews
};

const mapStateToProps = (state) => {
  return {
    hotels: state.hotels,
    activeCity: state.activeCity
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHotelsAction: (hotels) => dispatch(fetchHotelsAction(hotels)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
