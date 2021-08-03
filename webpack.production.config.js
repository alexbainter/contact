'use strict';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devConfig = require('./webpack.config.js');

const config = Object.assign({}, devConfig, {
  mode: 'production',
  output: {
    filename: '[contenthash].js',
  },
  module: {
    rules: devConfig.module.rules.map((rule) =>
      Object.assign({}, rule, {
        use: Array.isArray(rule.use)
          ? rule.use.map((loader) =>
              loader !== 'style-loader' ? loader : MiniCssExtractPlugin.loader
            )
          : rule.use,
      })
    ),
  },
  plugins: devConfig.plugins.concat([
    new MiniCssExtractPlugin({ filename: '[contenthash].css' }),
  ]),
});

module.exports = config;
