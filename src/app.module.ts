import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common'
import { ArticleModule } from './modules/article'
import { CategoryModule } from './modules/category'
import { DetailModule } from './modules/detail-page/detail.module'
import { IndexModule } from './modules/index-page/index.module'
import { TagModule } from './modules/tag'
import { UserModule } from './modules/user'
import { CoreModule } from './core.module'
import { AuthModule } from './auth'

@Module({
  imports: [CoreModule, DetailModule, IndexModule, UserModule, ArticleModule, CategoryModule, TagModule, AuthModule],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    const middlewares = [
      // IpMiddleware,
      // CookieParserMiddleware,
      // RateLimitMiddleware,
      // CorsMiddleware,
      // CSRFMiddleware,
      // SessionMiddleware,
      // UserMiddleware,
    ]
    consumer.apply(...middlewares).forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}
