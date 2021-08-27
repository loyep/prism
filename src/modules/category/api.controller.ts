import { Controller, Get, Param } from '@nestjs/common'
import { CategoryService } from './category.service'
import _ from 'lodash'
import { Category } from '@prisma/client'
// import { hashSync } from 'bcrypt'

@Controller('/api')
export class CategoryApiController {
  constructor(private readonly service: CategoryService) {}

  @Get('/categories')
  async getCategory() {
    const categories = await this.service.categories()
    return categories
  }

  @Get('/categories/:slug')
  async getCategoryBySlug(@Param('slug') slug: string) {
    const category = await this.service.getCategory({
      slug,
    })
    return _.omit<Category>(category)
  }
}
