import { NestFactory } from '@nestjs/core'
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module'
import { bootstrap } from './bootstrap'

async function main(): Promise<void> {
  const express = new ExpressAdapter()
  const app = await NestFactory.create<NestExpressApplication>(AppModule, express)
  await bootstrap(app, true)
}

main()
  .catch(() => {
    process.exit(1)
  })
  .then(() => {
    // fs.writeFile(filename,data,[options],callback)
  })
