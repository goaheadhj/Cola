const path = require("path");

module.exports = {
  target: "node",
  entry: "./src/index.js",
  output: {
    path: path.resolve(process.cwd(), "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transform all .js files required somewhere with Babel
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ]
  },
  resolve: {
    extensions: [".js"],
  },
  devtool: "source-map"
}