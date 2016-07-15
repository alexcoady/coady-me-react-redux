// NPM dependencies
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Shared dependencies
import routes from 'routes';
import reducers from 'reducers';
import promiseMiddleware from 'middleware/promise';
import fetchComponentData from 'helpers/fetchComponentData';

// Module defintion
export default (req, res) => {

  const reducer = combineReducers({ ...reducers });
  const store = createStore(reducer, applyMiddleware(promiseMiddleware));

  match({ location: req.url, routes }, (err, redirectLocation, renderProps) => {

    if (err) {

      res.status(500).send(err.message);

    } else if (redirectLocation) {

      res.redirect(302, redirectLocation.pathname + redirectLocation.search);

    } else if (renderProps) {

      function renderView () {

        const state = store.getState();

        const appHTML = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );

        return `
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
        `;
      }

      console.log(renderProps.params);

      fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
        .then(renderView)
        .then(html => res.end(html))
        .catch(err => res.end(err.message));

    } else {

      res.status(404).send('Not found in the router config');

    }

  });

}
