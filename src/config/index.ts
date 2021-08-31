import _ from 'lodash'
import app from './app'
import auth from './auth'
import database from './database'
import logging from './logging'

class CacheProvider {
  private readonly config = {}

  constructor() {
    this.config = {
      app,
      auth,
      database,
      logging,
    }
  }

  get(key: string) {
    return _.get(this.config, key)
  }
}

const provider = new CacheProvider()

export default function config(key: string) {
  return provider.get(key)
}
