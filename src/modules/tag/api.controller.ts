import { Controller, Get, Param } from '@nestjs/common'
import { TagService } from './tag.service'
import _ from 'lodash'
import { Tag } from '@prisma/client'
// import { hashSync } from 'bcrypt'

@Controller('/api')
export class TagApiController {
  constructor(private readonly service: TagService) {}

  @Get('/tags')
  async getTag() {
    const tags = await this.service.tags()
    return tags
  }

  @Get('/tags/:slug')
  async getTagBySlug(@Param('slug') slug: string) {
    const tag = await this.service.getTag({
      slug,
    })
    return _.omit<Tag>(tag)
  }

  @Get('/tags/:slug/articles')
  async getArticleByTagSlug(@Param('slug') slug: string) {
    const tag = await this.service.getTag({
      slug,
    })
    return _.omit<Tag>(tag)
  }
}
