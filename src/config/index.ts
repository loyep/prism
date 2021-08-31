import _ from 'lodash'
import app from './app'
import auth from './auth'
import database from './database'
import logging from './logging'

class CacheProvider {
  private readonly _config = {}

  constructor() {
    this._config = {
      app,
      auth,
      database,
      logging,
    }
  }

  get(key: string) {
    return _.get(this._config, key)
  }
}


export default function config(this: any, key: string) {
  if (!this.provider) {
    console.log('before', this.provider)
    this.provider = new CacheProvider()
    console.log(this.provider)
  }
  console.log('config')

  return this.provider.get(key)
}
