import type { NestExpressApplication } from '@nestjs/platform-express'
import { initialSSRDevProxy, loadConfig } from 'ssr-server-utils'
import cookieParser from 'cookie-parser'
import { HttpExceptionFilter } from '~/core/filters/http-exception.filter'
import { ValidationPipe } from '@nestjs/common'
import { PrismaService } from './prisma'

export async function bootstrap(app: NestExpressApplication, listening = true) {
  app.use(cookieParser())
  app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalPipes(new ValidationPipe())

  const { serverPort } = loadConfig()

  if (process.env.ONLY_API !== 'true') {
    await initialSSRDevProxy(app, {
      express: true,
    })
  }

  app.set('x-powered-by', false)

  const prismaService: PrismaService = app.get(PrismaService)
  prismaService.enableShutdownHooks(app)

  if (listening) {
    await app.listen(serverPort)
  }
  return app
}
