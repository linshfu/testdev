const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    path.resolve(__dirname, "src"),
    path.resolve(__dirname, "src/css/style.sass")

  ],
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "",
    filename: "[name].js",
    library: "testdev",
    libraryTarget: "umd"
  },
  module: {
    loaders: [
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, 'src/css')
        )
      },
      { test: /\.pug$/, loader: "pug-loader" },
      {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015','es2017','react']
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin( "style.css" ),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.pug'
    })
  ]
}
