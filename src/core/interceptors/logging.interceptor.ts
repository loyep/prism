import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor, Scope } from "@nestjs/common"
import { Observable } from "rxjs"
import { tap } from "rxjs/operators"

@Injectable({ scope: Scope.REQUEST })
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger()

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest()
    const { url, method, params = {}, query = {} } = request

    this.logger.log(`Before: ${method} ${url} with :
    params: ${JSON.stringify(params)}, with query: ${JSON.stringify(query)}`)

    const now = Date.now()
    return next
      .handle()
      .pipe(tap(() => this.logger.log(`After: ${method} ${url} took ${Date.now() - now}ms`)))
  }
}
