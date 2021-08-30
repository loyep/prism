import { Req } from '@nestjs/common'
import { Controller, Post } from '@nestjs/common'
import { Request } from 'express'
import { LoggerApiService } from './api.service'

@Controller('/api')
export class LoggerApiController {
  constructor(private readonly service: LoggerApiService) {}

  @Post('/log')
  async logging(@Req() req: Request) {
    this.service.log({
      ip: req.ip,
      url: req.headers.referer || '',
    })
    return ''
  }
}
