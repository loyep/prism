import { Module } from '@nestjs/common'
import { PrismaModule } from './prisma'
import { isOnlyApi } from './utils'
import { ServeStaticModule } from '@nestjs/serve-static'
import { basePath } from '@kova/core'
import { LoggerModule } from './core/logger'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ...(!isOnlyApi
      ? [
          ServeStaticModule.forRoot({
            rootPath: basePath('build'),
            serveRoot: '/',
          }),
        ]
      : []),
    ServeStaticModule.forRoot({
      rootPath: basePath('public'),
      serveRoot: '/',
    }),
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development'],
      isGlobal: true,
    }),
    PrismaModule,
    LoggerModule,
  ],
})
export class CoreModule {}
