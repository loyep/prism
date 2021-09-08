/**
 * @type {import('ssr-server-utils').UserConfig}
 */
const config = {
  css: () => {
    const lessToJs = require('less-vars-to-js')
    const fs = require('fs')

    const modifyVars = (lessToJs.__esModule ? lessToJs.default : lessToJs)(
      fs.readFileSync('./web/variables.less', 'utf8'),
    )

    return {
      loaderOptions: {
        less: {
          lessOptions: {
            modifyVars,
            javascriptEnabled: true,
          },
        },
      },
    }
  },
  chainClientConfig(config) {
    config.optimization.get('splitChunks').chunks = 'initial'
    // config
    //   .plugin('webpack-bundle-analyzer')
    //   .use(new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin)({ analyzerPort: 9999 }))
    config.plugin('antd-dayjs-webpack-plugin').use(new (require('antd-dayjs-webpack-plugin'))())
    return config.toConfig()
  },
}

module.exports = config
