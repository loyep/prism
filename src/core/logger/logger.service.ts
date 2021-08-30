import { HttpService } from '@nestjs/axios'
import { Inject, Injectable, Logger, LoggerService as NestLoggerService } from '@nestjs/common'
// import { logger } from '@leaa/api/src/utils';

@Injectable()
export class LoggerService extends Logger implements NestLoggerService {
  @Inject(HttpService)
  private readonly http: HttpService

  log(message: string, context?: string) {
    super.log(message, context)
    // logger.log(message, context);
  }

  logOnline(message: string, context?: string) {
    this.http
  }

  error(message: string, trace: string, context?: string) {
    super.error(message, trace, context)
    // logger.error(message, trace, context);
  }

  warn(message: string, context?: string) {
    super.warn(message, context)
    // logger.warn(message, context);
  }

  debug(message: string, context?: string) {
    super.debug(message, context)
    // logger.debug(message, context);
  }

  verbose(message: string, context?: string) {
    super.verbose(message, context)
    // logger.verbose(message, context);
  }
}
