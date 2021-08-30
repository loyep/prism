import { Req } from '@nestjs/common'
import { Controller, Post } from '@nestjs/common'
import { Request, Response } from 'express'
import { LoggerApiService } from './api.service'
import { getClientIp } from '@kova/ssr'
import { Res } from '@nestjs/common'
import { v4 as uuidv4 } from 'uuid'

const logBidCookieName = 'bid'

@Controller('/api')
export class LoggerApiController {
  constructor(private readonly service: LoggerApiService) {}

  @Post('/log')
  async logging(@Req() req: Request, @Res() res: Response) {
    const cookieBid = req.cookies[logBidCookieName]
    const bid = cookieBid || uuidv4()
    const data = {
      ip: getClientIp(req),
      bid,
      url: req.headers.referer || '',
    }
    this.service.log(data)
    if (cookieBid) {
      return res.send('')
    }
    return res.cookie(logBidCookieName, bid, { maxAge: 31536000, httpOnly: true }).send('')
  }
}
