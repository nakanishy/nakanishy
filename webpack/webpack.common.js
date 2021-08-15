const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const path = require('path')

function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}

const config = {
  entry: ['./src/index.tsx'],
  output: {
    path: resolve('dist'),
    publicPath: '/',
    filename: '[name].[fullhash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    /* tsconfig.json の paths と一致させる必要 */
    alias: {
      '~': resolve('src/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve('static'),
          to: resolve('dist'),
        },
      ],
    }),
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin(),
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
}

module.exports = config
