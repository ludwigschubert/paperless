var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: [
    'webpack/hot/only-dev-server',
    './js/index.jsx',
  ],

  output: {
    path: __dirname + '/public',
    filename: "bundle.js",
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"],
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html' // simply copies our index.html file to output directory
    })
  ]

};
