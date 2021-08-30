import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module'
import { bootstrap } from './bootstrap'

async function main(): Promise<void> {
  const logger = new Logger('App-Log')
  const express = new ExpressAdapter()
  logger.log('App Launcher...', ' 🚀 ')
  const app = await NestFactory.create<NestExpressApplication>(AppModule, express, {
    logger,
  })
  await bootstrap(app, true)
}

main()
  .catch(() => {
    process.exit(1)
  })
  .finally(() => {
    //
  })
