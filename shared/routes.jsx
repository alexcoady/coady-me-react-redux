// NPM dependencies
import React from 'react';
import { Route } from 'react-router';

// App dependencies
import App from './components';
import About from './components/about';
import Contact from './components/contact';

export default (
  <Route name="app" component={App} path="/">
    <Route name="about" component={About} path="/about"></Route>
    <Route name="contact" component={Contact} path="/contact"></Route>
  </Route>
);
