const { nestjsPlugin } = require('@kova/ssr')
const { vuePlugin } = require('ssr-plugin-vue3')

module.exports = {
  serverPlugin: nestjsPlugin(),
  clientPlugin: vuePlugin(),
}
