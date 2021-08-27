import { Controller, Get, Param } from '@nestjs/common'
import { ArticleService } from './article.service'
import _ from 'lodash'
import { Article } from '@prisma/client'
// import { hashSync } from 'bcrypt'

@Controller('/api')
export class ArticleApiController {
  constructor(private readonly service: ArticleService) {}

  @Get('/articles')
  async getArticle() {
    const articles = await this.service.articles()
    return articles
  }

  @Get('/articles/:slug')
  async getArticleBySlug(@Param('slug') slug: string) {
    const article = await this.service.getArticle({
      slug,
    })
    return _.omit<Article>(article)
  }

  @Get('/articles/:slug/favorites')
  async getFavoritesBySlug(@Param('slug') slug: string) {
    return await this.service.getFavoritesByArticle(slug)
  }

  @Get('/articles/:slug/tags')
  async getTagsBySlug(@Param('slug') slug: string) {
    return await this.service.getTagsByArticle(slug)
  }
}
