'use strict';
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
    'webpack-dev-server/client?http://0.0.0.0:3000', // activates webpack inline mode, see: https://webpack.github.io/docs/webpack-dev-server.html#inline-mode
    'webpack/hot/only-dev-server', // 'only' prevents reload on syntax errors; see: https://webpack.github.io/docs/webpack-dev-server.html#hot-module-replacement - Mathias doesn't need this b/c he uses his own express server with a middleware (so he can define more custom roots and have it be independent from Webpack), react-redux-starter-kit uses node to start server (with Koa, alternative to express, see server/main.js)
  ],
  // module.loaders is manually modified below !!!
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

// all the following does is prepend 'react-hot' to the list of loaders
// under `module.loaders[?].loaders` (where `?` is the index for the JSX loader)
const mergedConfig = merge(base, developmentConfig);
mergedConfig.module.loaders
  // `/a/ === /a/` evaluates to `false` - need to convert regexes to strings before we can compare them
  // '\.' in a string evaluates to '.' - need to double escape...
  .filter((el) => { return String(el.test) === '/\\.jsx?$/' })[0]
  .loaders.unshift('react-hot'); // the order of loaders is important

module.exports = mergedConfig;
