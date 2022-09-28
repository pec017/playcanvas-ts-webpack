const path = require('path');
const webpack = require('webpack');
const WebpackPlaycanvas = require('webpack-playcanvas');
const playcanvasOption = require('./playcanvas.config.json');

module.exports = {
  entry: {
    main: './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].build.js',
    clean: true,
  },
  externals: {
    'playcanvas': 'pc',
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new WebpackPlaycanvas(playcanvasOption)
  ],
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: 'ts-loader',
    }, {
      test: /\.glsl$/,
      use: [{ loader: 'raw-loader' }]
    }]
  }
};