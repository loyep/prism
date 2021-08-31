import { Module } from '@nestjs/common'
import { PrismaModule } from './prisma'
import { isOnlyApi } from './utils'
import { ServeStaticModule } from '@nestjs/serve-static'
import { basePath } from '@kova/core'
import { LoggerModule } from './core/logger'
import { ConfigModule } from '@nestjs/config'
import { ScheduleModule } from '@nestjs/schedule'
import { CleanMediaService } from './core/cron/clean-meida.service'

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
    ScheduleModule.forRoot(),
    PrismaModule,
    LoggerModule,
  ],
  providers: [CleanMediaService],
})
export class CoreModule {}
