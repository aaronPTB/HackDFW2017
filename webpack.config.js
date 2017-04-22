const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/static/js/client.js'),
  output: {
    path: path.join(__dirname, 'src/static/js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: ['babel-loader'],
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
};
