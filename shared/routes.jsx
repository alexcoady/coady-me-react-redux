// NPM dependencies
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// App dependencies
import App from './components';
import About from './components/about';
import Contact from './components/contact';
import ProjectList from './components/project-list';
import ProjectItem from './components/project-item';

export default (
  <Route name="app" component={App} path="/">
    <IndexRoute component={ProjectList} />
    <Route name="about" component={About} path="about"></Route>
    <Route name="contact" component={Contact} path="contact"></Route>
    <Route name="workItem" component={ProjectItem} path="work/:workSlug"></Route>
  </Route>
);
