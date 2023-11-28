import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/config'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    // order is important
    use: [
      // Creates `style` nodes from JS strings
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      'css-loader',
      // Compiles Sass to CSS
      'sass-loader',
    ],
  }

  // need babel-loder if not use typescript
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader', // use ts-loader to load .ts and .tsx files
    exclude: /node_modules/,
  }

  // order is important
  return [typescriptLoader, cssLoader]
}
