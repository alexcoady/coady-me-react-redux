// NPM dependencies
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import reduxLogger from 'redux-logger';

// Shared app dependencies
import routes from './../shared/routes';
import * as reducers from './../shared/reducers';
import promiseMiddleware from './../shared/middleware/promise';

// Import styles
require('./style/main.scss');

let state = window.__INITIAL_STATE__;

const reducer = combineReducers({...reducers, routing: routerReducer});
const store = createStore(reducer, state, applyMiddleware(promiseMiddleware, reduxLogger()));
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router children={routes} history={history} />
  </Provider>,
  document.getElementById('app')
);
