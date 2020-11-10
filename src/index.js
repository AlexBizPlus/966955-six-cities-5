import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import App from "app";
import rootReducers from './store/reducers';
import {BACKEND_URL, REQUEST_TIMEOUT} from './api/const';

const api = axios.create({
  baseURL: BACKEND_URL,
  timeout: REQUEST_TIMEOUT,
});
// instance.get('/longRequest'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk.withExtraArgument(api))
));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
