const path = require('path');
const webpack = require('webpack');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

module.exports = {
  entry: {
    main: './src/index.ts',
    ui: './src/ui/ui-manager.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist/Scripts'),
    filename: '[name].build.js',
    clean: true,
  },
  externals: {
    'playcanvas': 'pc',
  },
  cache: {
    type: 'filesystem'
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new WebpackShellPluginNext({
      onAfterDone: {
        scripts: ['node node_modules/playcanvas-sync/pcsync.js pushAll --yes'],
        blocking: true,
        parallel: false
      }
    })
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