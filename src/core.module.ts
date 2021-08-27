import { Module } from '@nestjs/common'
import { PrismaModule } from './prisma'
import { isOnlyApi } from './utils'
import { ServeStaticModule } from '@nestjs/serve-static'
import { basePath } from '@kova/core'

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
    PrismaModule,
  ],
})
export class CoreModule {}
