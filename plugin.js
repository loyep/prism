const { nestjsPlugin, vuePlugin } = require('@kova/ssr')

module.exports = {
  serverPlugin: nestjsPlugin(),
  clientPlugin: vuePlugin(),
}
