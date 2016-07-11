// NPM dependencies
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// Shared app dependencies
import routes from './../shared/routes';
import * as reducers from './../shared/reducers';

// Import styles
require('./style/main.scss');

const reducer = combineReducers(reducers);
const store = createStore(reducer);

render(
  <Provider store={store}>
    <Router children={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
);
