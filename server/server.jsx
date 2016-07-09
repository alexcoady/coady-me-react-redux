// NPM dependencies
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

// Shared app dependencies
import routes from './../shared/routes';

const app = express();

app.use((req, res) => {

  match({ location: req.url, routes }, (err, redirectLocation, renderProps) => {

    if (err) {

      res.status(500).send(err.message);

    } else if (redirectLocation) {

      res.redirect(302, redirectLocation.pathname + redirectLocation.search);

    } else if (renderProps) {

      const appHTML = renderToString(<RouterContext {...renderProps} />);

      res.status(200).send(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Alex Coady / Senior front-end developer</title>
          </head>
          <body>
            ${appHTML}
          </body>
        </html>
      `);

    } else {

      res.status(404).send('Not found');

    }

  });

})

app.listen(3000, () => {
  console.log('Server started, bitches');
});
