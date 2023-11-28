const path = require('path')

module.exports = {
  mode: 'production', // development or production mode
  entry: path.resolve(__dirname, 'src', 'index.js'), // entry point
  output: {
    filename: '[name].[contenthash].js', // name - 'main' by default, contenthash - unique hash based on the content
    path: path.resolve(__dirname, 'build'), // build dir
    clean: true, // clean at building
  },
}
