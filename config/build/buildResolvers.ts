import { ResolveOptions } from 'webpack'

export function buildResolvers(): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'], // import a from '/.a' instead of import a from './a.tsx'
  }
}
