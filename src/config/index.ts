import _ from 'lodash'
// import app from './app'
// import auth from './auth'
// import database from './database'
// import logging from './logging'
// import cache from './cache'
import fs from 'fs'
import path from 'path'
const configPath = path.resolve(process.cwd(), 'dist/config')
console.log('configPath', configPath)
import { loadModule } from '@kova/ssr'

class CacheProvider {
  private readonly config = {}

  constructor() {
    this.config = this.loadConfig()
  }

  loadConfig() {
    const allConfig = {}
    const configFiles = fs.readdirSync(configPath).filter((f) => path.extname(f) === '.js' && f !== 'index.js')
    for (const file of configFiles) {
      const extname = path.extname(file)
      const filePath = path.join(configPath, file)
      let config: any = loadModule(filePath)
      if (_.isFunction(config)) config = config()
      const fileName = path.basename(file, extname)
      allConfig[fileName] = config
    }
    return allConfig
  }

  get(key: string) {
    console.log(this.config)
    return _.get(this.config, key)
  }
}

export default function config(this: any, key: string) {
  if (!this.provider) {
    this.provider = new CacheProvider()
  }

  return this.provider.get(key)
}
