import { Module } from '@nestjs/common'
import { ArticleModule } from './modules/article'
import { CategoryModule } from './modules/category'
import { DetailModule } from './modules/detail-page/detail.module'
import { IndexModule } from './modules/index-page/index.module'
import { TagModule } from './modules/tag'
import { UserModule } from './modules/user'
import { CoreModule } from './core.module'

@Module({
  imports: [CoreModule, DetailModule, IndexModule, UserModule, ArticleModule, CategoryModule, TagModule],
})
export class AppModule {}
