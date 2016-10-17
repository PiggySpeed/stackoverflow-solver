import webpack from 'webpack';
import path from 'path';

const module = {
  devtool: 'source-map',
  debug: true,
  entry: path.join(__dirname, 'src'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'built'),
    publicPath: 'http://localhost:8080/built/'
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.less$/, exclude: /node_modules/, loader: 'style!css!less' }
    ]
  }
};

export default module;