// NPM dependencies
import path from 'path';
import express from 'express';

// Shared app dependencies
import routes from './routes';
import api from './api';

import db from './database';

const app = express();

// Static content
app.use('/assets', express.static(path.join(__dirname, './assets')));

// API endpoints
app.use('/api', api);

// React router endpoints
app.use(routes);

export default (PORT) => {

  app.listen(PORT, () => {

    console.log(`Server started, bitches (Port: ${PORT})`);

  });
}
