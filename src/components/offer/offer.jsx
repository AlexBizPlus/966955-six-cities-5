import React, {PureComponent} from "react";
import classNames from "classnames";
import Cards from "../cards/cards";
import Form from "../form/form";
import {myPropTypes as PropTypes} from "../../prop";
import {Link} from 'react-router-dom';

class Offer extends PureComponent {

  render() {
    const {offer, reviews, offers} = this.props;

    const placeCardBookmarkStyle = classNames(
        {
          "property__bookmark-button": true,
          "button": true,
          "property__bookmark-button--active": offer[`is_favorite`]
        });

    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link className="header__logo-link" to="/">
                  <img className="header__logo" src="../img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to="/login">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
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
                  <button className={placeCardBookmarkStyle} type="button">
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
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                  <ul className="reviews__list">
                    {
                      reviews.map((review, i) => {
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
                              <time className="reviews__time" dateTime={review[`date`]}>{review[`date`]}</time>
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
            <section className="property__map map"></section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <Cards offers={offers} classes={[`near-places__card`, `place-card`]} />
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

Offer.propTypes = {
  offer: PropTypes.offer,
  offers: PropTypes.offers,
  reviews: PropTypes.reviews,
};

export default Offer;
