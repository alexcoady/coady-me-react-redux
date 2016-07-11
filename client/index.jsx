// NPM dependencies
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

// Shared app dependencies
import routes from './../shared/routes';

// Import styles
require('./style/main.scss');

render(
  <Router children={routes} history={browserHistory} />,
  document.getElementById('app')
);
