module.exports = function (api) {
  api.cache(true)
  return {
    plugins: [
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ],
  }
}
