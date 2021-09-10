import { loadModule } from '@kova/ssr'
import fs from 'fs'
import _ from 'lodash'
import path from 'path'
const configPath = path.resolve(process.cwd(), 'dist/config')

class CacheProvider {
  private readonly config = {}

  constructor() {
    this.config = this.loadConfig()
  }

  loadConfig() {
    const allConfig = {}
    const configFiles = fs.readdirSync(configPath).filter((f) => path.extname(f) === '.js')
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
    return _.get(this.config, key)
  }
}

const provider = new CacheProvider()

export default function config(key: string) {
  return provider.get(key)
}
