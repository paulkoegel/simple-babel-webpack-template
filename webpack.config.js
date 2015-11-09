var path = require('path');
var webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['', '.js']
  },
  entry:  [
    path.resolve(__dirname, 'src/main.js')
  ],
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'main.js',
    publicPath: 'dist/'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel'}
    ]
  },
  stats: {
		colors: true
	},
  devtool: 'source-map'
}
