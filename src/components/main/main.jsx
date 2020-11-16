import React, {useEffect, useRef, useState} from "react";
import {Link} from 'react-router-dom';
import {connect, useSelector, useDispatch} from "react-redux";
import {fetchHotelsAction, hotelSortAction, hotelsUpdateAction} from "hotelActions";
import classNames from "classnames";
import Cards from "cards";
import {Routes, SortList} from 'const';
import {compareItemsPrice, compareItemRating} from 'utils';
import CityMap from "cityMap";
import Cities from "cities";
import EmptyMain from "emptyMain";
import "./main.css";

const Main = () => {

  const sort = useSelector((state) => state.hotels.sort);
  const login = useSelector((state) => state.user.login);
  const activeCity = useSelector((state) => state.city.activeCity);
  const offers = useSelector((state) => state.hotels.hotels).filter((item)=>item.city.name === activeCity);
  const unsorted = useSelector((state) => state.hotels.unsorted).filter((item)=>item.city.name === activeCity);
  const dispatch = useDispatch();
  const selectRef = useRef();
  const selectListRef = useRef();
  const [selectText, setSelectText] = useState(SortList[0].text);

  useEffect(() => {
    dispatch(fetchHotelsAction());
    setSelectText(SortList[0].text);
    dispatch(hotelSortAction());
  }, [activeCity]);

  useEffect(() => {
    switch (sort) {
      case `low-to-high`:
        dispatch(hotelsUpdateAction(offers.sort(compareItemsPrice)));
        break;
      case `high-to-low`:
        dispatch(hotelsUpdateAction(offers.sort(compareItemsPrice).reverse()));
        break;
      case `top-rated`:
        dispatch(hotelsUpdateAction(offers.sort(compareItemRating).reverse()));
        break;
      default:
        dispatch(hotelsUpdateAction(unsorted));
        break;
    }
    setSelectText(SortList.find((item) => item.id === sort).text);
  }, [sort]);


  if (!offers) {
    return (<div>Loading</div>);
  }

  const handleMainPageClick = (evt) => {
    switch (evt.target) {
      case selectRef.current:
        selectListRef.current.classList.toggle(`places__options--opened`);
        break;
      default:
        if (selectListRef.current.classList.contains(`places__options--opened`)) {
          selectListRef.current.classList.remove(`places__options--opened`);
        }
        break;
    }
  };

  const handleSelectListClick = (evt) => {
    dispatch(hotelSortAction(evt.target.id));
  };

  return (
    <div className="page page--gray page--main" onClick={handleMainPageClick}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={Routes.HOME} className="header__logo-link header__logo-link--active">
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
                    to={Routes.FAVORITES}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
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
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Cities />
          </section>
        </div>
        <div className="cities">
          {
            offers.length === 0
              ? <EmptyMain />
              : (
                <div className="cities__places-container container">
                  <section className="cities__places places">
                    <h2 className="visually-hidden">Places</h2>
                    <b className="places__found">
                      {offers.length} places to stay in {activeCity}
                    </b>
                    <form className="places__sorting">
                      <span className="places__sorting-caption span-padding">Sort by</span>
                      <span
                        className="places__sorting-type"
                        tabIndex="0"
                        ref={selectRef}
                      >
                        {/* {SortList[0].text} */}
                        {selectText}
                        <svg className="places__sorting-arrow" width="7" height="4">
                          <use xlinkHref="#icon-arrow-select"></use>
                        </svg>
                      </span>
                      <ul
                        className="places__options places__options--custom"
                        onClick={handleSelectListClick}
                        ref={selectListRef}
                      >
                        {
                          SortList.map(({id, text}, i) => {
                            return (
                              <li
                                className={classNames(`places__option`, {[`places__option--active`]: i === 0})}
                                tabIndex="0"
                                id={id}
                                key={id}
                              >
                                {text}
                              </li>
                            );
                          })
                        }
                      </ul>
                    </form>
                    <div className="cities__places-list places__list tabs__content" >
                      <Cards offers={offers}
                        classes={[`cities__place-card`, `place-card`]}
                        style={`regular`}
                      />
                    </div>
                  </section>
                  <div className="cities__right-section">
                    <section className="cities__map map">
                      <CityMap mode={`cities`} />
                    </section>
                  </div>
                </div>
              )
          }
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    hotels: state.hotels,
    activeCity: state.activeCity,
    login: state.login
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHotelsAction: (hotels) => dispatch(fetchHotelsAction(hotels)),
    hotelSortAction: (sort) => dispatch(hotelSortAction(sort)),
    hotelsUpdateAction: (sort) => dispatch(hotelsUpdateAction(sort)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
