var path = require('path');
var webpack = require('webpack');

module.exports = function (env) {

  return {
    entry: [
      './client',
      'webpack-dev-server/client?http://localhost:8080/'
    ],
    output: {
      path: path.resolve(__dirname, 'server/assets/scripts'),
      filename: 'bundle.js',
      publicPath: '/assets/scripts/'
    },
    resolve: {
      modulesDirectories: ['node_modules', 'shared'],
      extensions: ['', '.js', '.jsx']
    },
    module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }, {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }]
    },
    plugins: [].filter(p => !!p)
  };
};
