import path from 'path'
import webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildMode, BuildPaths } from './config/build/types/config'

const mode: BuildMode = 'development'
const isDev = mode === 'development'

const PORT = 3000

const paths: BuildPaths = {
  build: path.resolve(__dirname, 'build'),
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  html: path.resolve(__dirname, 'public', 'index.html'),
}

const config: webpack.Configuration = buildWebpackConfig({
  mode,
  paths,
  isDev,
  port: PORT,
})

export default config
