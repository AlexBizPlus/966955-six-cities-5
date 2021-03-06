import React, {useRef, useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {AuthorizationStatus, CommentLength} from "@const";
import {
  userReviewAction,
  userRatingAction,
  fetchReviewsPostAction,
  reviewLoadingAction,
  reviewErrorAction
} from "../../store/actions/reviews-actions";
import "./form.css";

const Form = () => {

  const authorizationStatus = useSelector((state) => state.USER.authorizationStatus);
  const offer = useSelector((state) => state.HOTELS.offer);
  const review = useSelector((state) => state.REVIEWS.review);
  const reviews = useSelector((state) => state.REVIEWS.reviews);
  const rating = useSelector((state) => state.REVIEWS.rating);
  const isLoading = useSelector((state) => state.REVIEWS.isLoading);
  const isError = useSelector((state) => state.REVIEWS.isError);
  const dispatch = useDispatch();
  const buttonRef = useRef();
  const input5RatingRef = useRef();
  const input4RatingRef = useRef();
  const input3RatingRef = useRef();
  const input2RatingRef = useRef();
  const input1RatingRef = useRef();
  const textareaRef = useRef();
  const errorMessageRef = useRef();
  const [isBusy, setIsBusy] = useState(false);

  const disableForm = (boolean) => {
    input5RatingRef.current.disabled = boolean;
    input4RatingRef.current.disabled = boolean;
    input3RatingRef.current.disabled = boolean;
    input2RatingRef.current.disabled = boolean;
    input1RatingRef.current.disabled = boolean;
    textareaRef.current.disabled = boolean;
    if (boolean) {
      buttonRef.current.disabled = boolean;
    }
  };

  useEffect(() => {
    if (
      input5RatingRef.current &&
      input4RatingRef.current &&
      input3RatingRef.current &&
      input2RatingRef.current &&
      input1RatingRef.current &&
      textareaRef.current &&
      buttonRef.current
    ) {
      disableForm(isLoading);
    }
  }, [isLoading]);

  useEffect(() => {
    setIsBusy(false);
  }, [reviews]);

  useEffect(() => {
    if (isError && errorMessageRef.current) {
      errorMessageRef.current.classList.remove(`no-display`);
    }
    setIsBusy(false);
  }, [isError]);

  const handleMessageClick = () => {
    errorMessageRef.current.classList.add(`no-display`);
    dispatch(reviewLoadingAction(false));
    dispatch(reviewErrorAction(false));
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(reviewLoadingAction(true));
    setIsBusy(true);
    dispatch(fetchReviewsPostAction(offer.id, {comment: review, rating}));
    input5RatingRef.current.checked = false;
    input4RatingRef.current.checked = false;
    input3RatingRef.current.checked = false;
    input2RatingRef.current.checked = false;
    input1RatingRef.current.checked = false;
    textareaRef.current.value = ``;
    buttonRef.current.disabled = true;
  };

  const handleFormChange = (evt) => {
    const {name, value} = evt.target;
    switch (name) {
      case `review`:
        buttonRef.current.disabled = true;
        if (rating && value.length >= CommentLength.MIN) {
          dispatch(userReviewAction(value));
          buttonRef.current.disabled = false;
        }
        break;
      case `rating`:
        dispatch(userRatingAction(value));
        if (textareaRef.current.value.length >= CommentLength.MIN) {
          dispatch(userReviewAction(textareaRef.current.value));
          buttonRef.current.disabled = false;
        }
        break;
      default:
        return;
    }
  };

  if (authorizationStatus !== AuthorizationStatus.AUTH) {
    return (<div />);
  }

  return (
    <form onSubmit={handleFormSubmit} className="reviews__form form">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input
          onChange={handleFormChange}
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          type="radio"
          ref={input5RatingRef}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          onChange={handleFormChange}
          className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id="4-stars"
          type="radio"
          ref={input4RatingRef}
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          onChange={handleFormChange}
          className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id="3-stars"
          type="radio"
          ref={input3RatingRef}
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          onChange={handleFormChange}
          className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id="2-stars"
          type="radio"
          ref={input2RatingRef}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          onChange={handleFormChange}
          className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          id="1-star"
          type="radio"
          ref={input1RatingRef}
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        onChange={handleFormChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        ref={textareaRef}
        maxLength={CommentLength.MAX}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={true}
          ref={buttonRef}
        >
          {
            isBusy ? <span className="spinner"/> : `Submit`
          }
        </button>
      </div>
      <div
        className="error-message no-display"
        id="errorMessage"
        onClick={handleMessageClick}
        ref={errorMessageRef}
      >
        Something went wrong. Sorry. Try again
      </div>
    </form>
  );
};

export default Form;
