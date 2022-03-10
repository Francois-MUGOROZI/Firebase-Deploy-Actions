/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: path.resolve('src'),
    historyApiFallback: true,
    port: 8084,
  },
});
