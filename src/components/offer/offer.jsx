import React, {useEffect, useRef} from "react";
import {Link, useParams} from 'react-router-dom';
import {connect, useSelector, useDispatch} from "react-redux";
import {fetchHotelNearbyAction, fetchHotelOfferAction} from "hotelActions";
import {fetchReviewsAction} from "reviewsActions";
import {favoriteAction, checkAuthAction} from "userActions";
import {Routes, MAX_COMMENTS} from 'const';
import classNames from "classnames";
import Cards from "cards";
import Form from "form";
import CityMap from "cityMap";
import {formatDate} from "utils";

const Offer = () => {

  const login = useSelector((state) => state.user.login);
  const offer = useSelector((state) => state.hotels.offer);
  const reviews = useSelector((state) => state.reviews.reviews);
  const reviewsCount = useSelector((state) => state.reviews.reviewsCount);
  const nearby = useSelector((state) => state.hotels.nearby);
  const dispatch = useDispatch();
  const buttonRef = useRef();
  const {id} = useParams();

  useEffect(() => {
    dispatch(fetchHotelOfferAction(id));
    dispatch(fetchReviewsAction(id));
    dispatch(fetchHotelNearbyAction(id));
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [offer]);

  if (!offer || !reviews || !nearby) {
    return (<div>Loading</div>);
  }

  const handleButtonClick = (evt) => {
    evt.preventDefault();
    dispatch(favoriteAction(offer[`id`], +!offer[`is_favorite`]));
    offer[`is_favorite`] = !offer[`is_favorite`];
    buttonRef.current.classList.toggle(`property__bookmark-button--active`);
  };

  const buttonStyle = {
    "property__bookmark-button": true,
    "button": true,
    "property__bookmark-button--active": offer[`is_favorite`]
  };

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={Routes.HOME} >
                <img className="header__logo" src="../img/logo.svg" alt="6 cities logo" width="81" height="41" />
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
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                offer[`images`].map((image, i) => {
                  return (
                    <div className="property__image-wrapper" key={i}>
                      <img className="property__image" src={image} alt="Photo studio" />
                    </div>
                  );
                })
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer[`is_premium`] && <div className="property__mark">
                <span>Premium</span>
              </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer[`title`]}
                </h1>
                <button
                  className={classNames(buttonStyle)}
                  type="button"
                  ref={buttonRef}
                  onClick={handleButtonClick}
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: Math.round(offer[`rating`]) / 5 * 100 + `%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer[`rating`]}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer[`type`]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer[`bedrooms`]} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                    Max {offer[`max_adults`]} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer[`price`]}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    offer[`goods`].map((item, i) => {
                      return (
                        <li className="property__inside-item" key={i}>
                          {item}
                        </li>
                      );
                    })
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={offer[`host`][`avatar_url`]} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offer[`host`][`name`]}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer[`description`]}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
                <ul className="reviews__list">
                  {
                    reviews.slice(0, MAX_COMMENTS).map((review, i) => {
                      return (
                        <li className="reviews__item" key={i}>
                          <div className="reviews__user user">
                            <div className="reviews__avatar-wrapper user__avatar-wrapper">
                              <img className="reviews__avatar user__avatar" src={review[`user`][`avatar_url`]} width="54" height="54" alt="Reviews avatar" />
                            </div>
                            <span className="reviews__user-name">
                              {review[`user`][`name`]}
                            </span>
                          </div>
                          <div className="reviews__info">
                            <div className="reviews__rating rating">
                              <div className="reviews__stars rating__stars">
                                <span style={{width: Math.round(review[`rating`]) / 5 * 100 + `%`}}></span>
                                <span className="visually-hidden">Rating</span>
                              </div>
                            </div>
                            <p className="reviews__text">
                              {review[`comment`]}
                            </p>
                            <time className="reviews__time" dateTime={review[`date`]}>{formatDate(review[`date`])}</time>
                          </div>
                        </li>
                      );
                    })
                  }
                </ul>
                <Form />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <CityMap mode={`offer`} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <Cards offers={nearby}
                classes={[`near-places__card`, `place-card`]}
                style={`regular`}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    hotels: state.hotels,
    offer: state.offer,
    nearby: state.nearby,
    login: state.login,
    reviewsCount: state.reviewsCount,
    reviews: state.reviews
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHotelOfferAction: (offer) => dispatch(fetchHotelOfferAction(offer)),
    fetchReviewsAction: (reviews) => dispatch(fetchReviewsAction(reviews)),
    fetchHotelNearbyAction: (nearby) => dispatch(fetchHotelNearbyAction(nearby)),
    favoriteAction: ()=> dispatch(favoriteAction()),
    checkAuthAction: ()=> dispatch(checkAuthAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Offer);
