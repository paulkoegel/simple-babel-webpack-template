const base = require('./base.config');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const developmentConfig = {
  devServer: {
    stats: 'errors-only',
  },
  devtool: 'eval', // babel sourcemap setting, this is best for development but has no source maps - see https://webpack.github.io/docs/configuration.html#devtool alternative cheap-module-eval-source-map: has proper source maps in development
  entry: [
    'webpack-dev-server/client?http://localhost:3000', // activates webpack inline mode, see: https://webpack.github.io/docs/webpack-dev-server.html#inline-mode
    'webpack/hot/dev-server', // see: https://webpack.github.io/docs/webpack-dev-server.html#hot-module-replacement - Mathias doesn't need this b/c he uses his own express server with a middleware (so he can define more custom roots and have it be independent from Webpack), react-redux-starter-kit uses node to start server (with Koa, alternative to express, see server/main.js)
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = merge(base, developmentConfig);
