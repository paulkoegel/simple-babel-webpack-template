var path = require('path');
var webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry:  [
    'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/dev-server',
    path.resolve(__dirname, 'src/application.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    publicPath: 'js/',
    filename: 'application.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel'],
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  stats: {
		colors: true
	},
  devtool: 'source-map'
}
