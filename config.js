// const chunkName = 'kova'

/**
 * @type {import('ssr-server-utils').UserConfig}
 */
const config = {
  cssModulesWhiteList: [/vditor/, /antd/, /swiper/, /tailwindcss/],

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
        postcss: {
          // plugins: [require('tailwindcss'), require('autoprefixer')],
        },
      },
    }
  },
  chainClientConfig(config) {
    config.optimization.get('splitChunks').chunks = 'initial'
    return config.toConfig()
  },
}

module.exports = config
