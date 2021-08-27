const fs = require('fs')
const path = require('path')
const packageConfig = require('../package.json')
const { getBundleInfo } = require('@kova/core')

const bundleFilePath = path.resolve(__dirname, '../public/version')

function getNextBundleInfo() {
  let bundleInfo = {
    ...getBundleInfo(bundleFilePath),
    version: packageConfig.version,
    name: packageConfig.name,
  }

  bundleInfo.build = Number.isSafeInteger(bundleInfo.build)
    ? bundleInfo.build + 1
    : 1
  return bundleInfo
}

fs.writeFile(
  bundleFilePath,
  JSON.stringify(getNextBundleInfo()),
  function (err) {
    if (err) console.log(err)
  },
)
