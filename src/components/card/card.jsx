import React, {useRef} from "react";
import {connect, useDispatch} from "react-redux";
import {hoverHotelAction} from "../../store/actions/map-actions";
import {hotelUpdateAction} from "../../store/actions/hotel-actions";
import {favoriteAction} from "../../store/actions/user-actions";
import {myPropTypes as PropTypes} from "../../prop";
import classNames from "classnames";
import {Link} from 'react-router-dom';
import {Routes} from '../../const';

const Card = ({offer, classes, style}) => {

  const dispatch = useDispatch();
  const buttonRef = useRef();

  const handleButtonClick = (evt) => {
    evt.preventDefault();
    dispatch(favoriteAction(offer[`id`], +!offer[`is_favorite`]));
    offer[`is_favorite`] = !offer[`is_favorite`];
    dispatch(hotelUpdateAction());
  };

  const buttonStyle = {
    "place-card__bookmark-button": true,
    "button": true,
    "place-card__bookmark-button--active": offer[`is_favorite`]
  };

  const linkStyle = {
    "cities__image-wrapper": style === `regular`,
    "favorites__image-wrapper": style === `favorites`,
    "place-card__image-wrapper": true,
  };

  const cardStyle = {
    "favorites__card-info": style === `favorites`,
    "place-card__info": true,
  };

  const imgWidthStyle = style === `favorites` ? 150 : 260;
  const imgHeightStyle = style === `favorites` ? 110 : 200;

  return (
    <article
      onMouseOver={() => {
        dispatch(hoverHotelAction([offer.location.latitude, offer.location.longitude]));
      }}
      className={classes.join(` `)}
    >
      {offer[`is_premium`] && <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={classNames(linkStyle)}>
        <Link to={`${Routes.OFFER}/${offer[`id`]}`}>
          <img
            className="place-card__image"
            src={offer[`preview_image`]}
            width={imgWidthStyle}
            height={imgHeightStyle}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={classNames(cardStyle)}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer[`price`]}</b>
            <span className="place-card__price-text">
              &#47;&nbsp;night
            </span>
          </div>
          <button
            className={classNames(buttonStyle)}
            ref={buttonRef}
            type="button"
            onClick={handleButtonClick}
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
            <span style={{width: Math.round(offer[`rating`]) / 5 * 100 + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${Routes.OFFER}/${offer[`id`]}`}>{offer[`title`]}</Link>
        </h2>
        <p className="place-card__type">{offer[`type`]}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  offer: PropTypes.offer,
  classes: PropTypes.classes,
  style: PropTypes.style,
};

const mapDispatchToProps = (dispatch) => {
  return {
    hoverHotelAction: (hover) => dispatch(hoverHotelAction(hover)),
    hotelUpdateAction: () => dispatch(hotelUpdateAction()),
    favoriteAction: ()=> dispatch(favoriteAction())
  };
};

export default connect(null, mapDispatchToProps)(Card);
