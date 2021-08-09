const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    port: 4000,
    hot: true,
    open: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("company_name_dev"),
    }),
    new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
};
