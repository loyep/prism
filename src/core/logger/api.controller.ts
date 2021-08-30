import { Req } from '@nestjs/common'
import { Controller, Post } from '@nestjs/common'
import { Request } from 'express'
import { LoggerApiService } from './api.service'
import { getClientIp } from '@kova/ssr'

@Controller('/api')
export class LoggerApiController {
  constructor(private readonly service: LoggerApiService) {}

  @Post('/log')
  async logging(@Req() req: Request) {
    console.log(req.headers)
    this.service.log({
      ip: getClientIp(req),
      url: req.headers.referer || '',
    })
    return ''
  }
}
