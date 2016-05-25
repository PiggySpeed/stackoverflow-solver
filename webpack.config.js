var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  debug: true,
  entry: {
    app: ['webpack/hot/dev-server', './src/index.jsx']
  },
  output: {
    filename: 'bundle.js',
    path: './public/built',
    publicPath: 'http://localhost:8080/built/'
  },
  devServer: {
    inline: true,
    contentBase: "./src",
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
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader"
      }
    ]
  }
};
