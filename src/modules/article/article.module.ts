import { Module } from '@nestjs/common'

// Controllers
import { ArticleController } from './article.controller'
import { ArticleApiController } from './api.controller'

// Services
import { ArticleService } from './article.service'

@Module({
  imports: [],
  providers: [
    ArticleService,
  ],
  controllers: [ArticleController, ArticleApiController],
  exports: [
    ArticleService,
  ],
})
export class ArticleModule {}
