// NPM dependencies
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// Shared dependencies
import routes from 'routes';
import * as reducers from 'reducers';

// Module defintion
export default (req, res) => {

  const reducer = combineReducers(reducers);
  const store = createStore(reducer);

  match({ location: req.url, routes }, (err, redirectLocation, renderProps) => {

    if (err) {

      res.status(500).send(err.message);

    } else if (redirectLocation) {

      res.redirect(302, redirectLocation.pathname + redirectLocation.search);

    } else if (renderProps) {

      const appHTML = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );

      const state = store.getState();

      res.status(200).send(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Alex Coady / Senior front-end developer</title>
            <script type="application/javascript">
              window.__INITIAL_STATE__ = ${JSON.stringify(state)};
            </script>
          </head>
          <body>
            <div id="app">${appHTML}</div>
            <script src="/assets/scripts/bundle.js"></script>
          </body>
        </html>
      `);

    } else {

      res.status(404).send('Not found in the router config');

    }

  });

}
