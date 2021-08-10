const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    port: 4000,
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('company_name_dev'),
    }),
    new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
    },
  },
}
