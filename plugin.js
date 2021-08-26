const { reactPlugin, nestjsPlugin } = require('@kova/ssr')

module.exports = {
  serverPlugin: nestjsPlugin(),
  clientPlugin: reactPlugin(),
}
