import { Module } from '@nestjs/common'
import { ArticleModule } from './modules/article'
import { CategoryModule } from './modules/category'
import { DetailModule } from './modules/detail-page/detail.module'
import { indexModule } from './modules/index-page/index.module'
import { TagModule } from './modules/tag'
import { UserModule } from './modules/user'
import { PrismaModule } from './prisma'

@Module({
  imports: [DetailModule, indexModule, PrismaModule, UserModule, ArticleModule, CategoryModule, TagModule],
})
export class AppModule {}
