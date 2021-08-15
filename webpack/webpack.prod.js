const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
    }),
  ],
})
