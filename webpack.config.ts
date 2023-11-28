import path from 'path'
import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'

const config: webpack.Configuration = {
  mode: 'production', // development or production mode
  entry: path.resolve(__dirname, 'src', 'index.ts'), // entry point
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
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader', // use ts-loader to load .ts and .tsx files
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // import a from '/.a' instead of import a from './a.tsx'
  },
}

export default config
