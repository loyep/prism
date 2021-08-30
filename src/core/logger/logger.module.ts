import { Global, Module } from '@nestjs/common'
import { LoggerService } from './logger.service'
import { HttpModule } from '@nestjs/axios'
import { LoggerApiController } from './api.controller'
import { LoggerApiService } from './api.service'

@Global()
@Module({
  imports: [HttpModule],
  providers: [LoggerService, LoggerApiService],
  controllers: [LoggerApiController],
  exports: [LoggerService],
})
export class LoggerModule {}
