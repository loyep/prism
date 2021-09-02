import { Request, Response, NextFunction } from 'express'
import { Injectable, NestMiddleware } from '@nestjs/common'
import { Inject } from '@nestjs/common'
import { LoggerService } from '../logger'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  @Inject(LoggerService) logger: LoggerService

  private readonly whiteList = ['127.0.0.1', 'localhost', 'aiecho.cn']

  use(req: Request, res: Response, next: NextFunction): any {
    if (this.whiteList.includes(req.hostname)) {
      res.status(500).send()
    } else {
      next()
    }
  }
}
