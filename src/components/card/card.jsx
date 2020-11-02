import React, {PureComponent} from "react";
import {myPropTypes as PropTypes} from "../../prop";
import classNames from "classnames";
import {Link} from 'react-router-dom';

class Card extends PureComponent {

  starStyleWidth(rating) {
    return Math.round(rating) / 5 * 100;
  }

  render() {
    const {offer, classes} = this.props;

    const placeCardBookmarkStyle = classNames(
        `place-card__bookmark-button`,
        `button`,
        {
          "place-card__bookmark-button--active": offer[`is_favorite`]
        });

    return (
      <article
        onMouseOver={() => {
          this.props.showActiveCard(offer[`id`]);
        }}
        className={classes.join(` `)}
      >
        <div className="cities__image-wrapper place-card__image-wrapper">
          <Link to={`/offer/${offer[`id`]}`}>
            <img
              className="place-card__image"
              src={offer[`preview_image`]}
              width="260"
              height="200"
              alt="Place image"
            />
          </Link>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer[`price`]}</b>
              <span className="place-card__price-text">
                &#47;&nbsp;night
              </span>
            </div>
            <button
              className={placeCardBookmarkStyle}
              type="button"
            >
              <svg
                className="place-card__bookmark-icon"
                width="18"
                height="19"
              >
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: this.starStyleWidth(offer[`rating`]) + `%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={`/offer/${offer[`id`]}`}>{offer[`title`]}</Link>
          </h2>
          <p className="place-card__type">{offer[`type`]}</p>
        </div>
      </article>
    );
  }
}

Card.propTypes = {
  offer: PropTypes.offer,
  classes: PropTypes.classes,
  showActiveCard: PropTypes.showActiveCard
};

export default Card;
