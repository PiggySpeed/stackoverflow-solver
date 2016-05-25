var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'source-map',
  debug: true,
  entry: {
    app: ['webpack/hot/dev-server', './website/index.js']
  },
  output: {
    filename: 'bundle.js',
    path: './public/built',
    publicPath: 'http://localhost:8080/built/'
  },
  devServer: {
    inline: true,
    contentBase: "./website",
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: 'style!css!less'
      }
    ]
  },
  resolve: {
    root: path.resolve('./website')
  }
};
