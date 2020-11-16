import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import {createAPI} from "./api/api";
import {requireAuthorizationAction} from "./store/actions/user-actions";
import {redirect} from "./store/reducers/user-reducer";
import {AuthorizationStatus} from "./const";
import App from "app";
import rootReducers from './store/reducers/root-reducer';

const api = createAPI(
    () => store.dispatch(requireAuthorizationAction(AuthorizationStatus.NO_AUTH))
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers,
    /* preloadedState, */
    composeEnhancers(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    ));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
