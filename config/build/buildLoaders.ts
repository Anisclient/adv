import webpack from 'webpack'

export function buildLoaders(): webpack.RuleSetRule[] {
  // need babel-loder if not use typescript
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader', // use ts-loader to load .ts and .tsx files
    exclude: /node_modules/,
  }

  // order is important
  return [typescriptLoader]
}
