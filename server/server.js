import webpackServer from './webpack-server';
import expressServer from './express-server';

const PORT = process.env.PORT || 8080;
const PROD = process.env.NODE_ENV === 'production';

if (PROD) {

  expressServer(PORT);

} else {

  webpackServer(PORT);
  expressServer(PORT - 1);

}
