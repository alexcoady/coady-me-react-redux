// NPM dependencies
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

// Root config
const config = require('./../webpack.config')('dev');

export default (PORT) => {

  const server = new WebpackDevServer(webpack(config), {
    proxy: {
      '*': `http://localhost:${PORT - 1}`
    },
    publicPath: config.output.publicPath,
    noInfo: true
  });

  server.listen(PORT, 'localhost');
};
