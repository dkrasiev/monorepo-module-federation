import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { BuildOptions } from './types/types'

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port ?? 3000,
    open: options.startBrowser ?? false,
    // если раздавать статику через nginx То надо делать проксирование на Index.html
    historyApiFallback: true,
    hot: true,
  }
}
