import { DynamicModule, Module } from '@nestjs/common'

import { CacheCoreModule } from './cache-core.module'
import { CacheService } from '../cache'
import config from '@/core/config'

@Module({})
export class CacheModule {
  static getDefaultDriver() {
    return config('cache.default')
  }

  static getConfig(name?: string) {
    const driverName = name ?? this.getDefaultDriver()
    const stores = config('cache.stores')
    return stores[driverName] ?? null
  }

  static forRoot(): DynamicModule {
    return {
      module: CacheModule,
      global: true,
      providers: [CacheService],
      exports: [CacheService],
      imports: [CacheCoreModule.register(this.getConfig())],
    }
  }
}
