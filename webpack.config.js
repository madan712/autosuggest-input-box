var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/autosuggest-input-box.js",
  output: {
    path: path.resolve("build"),
    filename: "index.js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  externals: {
    react: "react"
  }
};