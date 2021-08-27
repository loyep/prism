import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common'
import { Response } from 'express'

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const res: Response = host.switchToHttp().getResponse()
    return res.status(exception.getStatus()).send(exception.message)
  }
}
