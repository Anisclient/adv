import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options
  return {
    mode, // development or production mode
    entry: paths.entry, // entry point
    output: {
      filename: '[name].[contenthash].js', // name - 'main' by default, contenthash - unique hash based on the content
      path: paths.build, // build dir
      clean: true, // clean at building
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  }
}
