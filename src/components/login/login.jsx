import React, {useRef, useEffect} from "react";
import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {loginAction, checkAuthAction} from "@actions/user-actions";
import {CITIES_LIST, Routes} from '@const';

const Login = () => {

  const emailElement = useRef();
  const passwordElement = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthAction(Routes.HOME));
  }, []);

  const handleFormSubmit = (evt)=> {
    evt.preventDefault();
    dispatch(loginAction({login: emailElement.current.value, password: passwordElement.current.value}));
  };

  return (
    <div className="page page--gray page--login">
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
                  <Link className="header__nav-link header__nav-link--profile" to={Routes.LOGIN}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="" onSubmit={handleFormSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required={true}
                  ref={emailElement}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required={true}
                  ref={passwordElement}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={Routes.HOME}>
                <span>{CITIES_LIST[0]}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Login;
