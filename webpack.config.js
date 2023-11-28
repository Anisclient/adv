const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production', // development or production mode
  entry: path.resolve(__dirname, 'src', 'index.js'), // entry point
  output: {
    filename: '[name].[contenthash].js', // name - 'main' by default, contenthash - unique hash based on the content
    path: path.resolve(__dirname, 'build'), // build dir
    clean: true, // clean at building
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'), // index.html as template
    }),
    new webpack.ProgressPlugin(), // show build progress
  ],
}
