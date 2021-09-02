import { Request, Response, NextFunction } from 'express'
import { Injectable, NestMiddleware } from '@nestjs/common'
import { Inject } from '@nestjs/common'
import { LoggerService } from '../logger'

@Injectable()
export class IpMiddleware implements NestMiddleware {
  @Inject(LoggerService) logger: LoggerService

  async use(req: Request, res: Response, next: NextFunction): Promise<void> {
    this.logger.log('1')
    await next()
    this.logger.log('2')
  }
}
