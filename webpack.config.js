const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode:
    process.env.NODE_ENV === "production"
      ? "production"
      : "development",
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          miniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()],
  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
    hot: true
  }
};
