const { join } = require('path')
const reactRefresh = require('@vitejs/plugin-react-refresh')

/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  plugins: [reactRefresh()],
  define: {
    __isBrowser__: true,
  },
  css: {
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
  },
  resolve: {
    alias: {
      '@': join(process.cwd(), './web'),
      _build: join(process.cwd(), './build'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  build: {
    rollupOptions: {
      input: './node_modules/ssr-plugin-react/esm/entry/client-entry.js',
    },
  },
}
