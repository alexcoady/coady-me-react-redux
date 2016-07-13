// NPM dependencies
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { fromJS } from 'immutable';

// Shared app dependencies
import routes from './../shared/routes';
import * as reducers from './../shared/reducers';
import promiseMiddleware from './../shared/middleware/promise';

// Import styles
require('./style/main.scss');

let state = window.__INITIAL_STATE__;

Object
  .keys(state)
  .forEach(key => {
    state[key] = fromJS(state[key]);
  });

const reducer = combineReducers(reducers);
const store = createStore(reducer, state, applyMiddleware(promiseMiddleware));

render(
  <Provider store={store}>
    <Router children={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
);
