import { Module } from '@nestjs/common'

// Controllers
import { CategoryController } from './category.controller'
import { CategoryApiController } from './api.controller'

// Services
import { CategoryService } from './category.service'

@Module({
  imports: [],
  providers: [CategoryService],
  controllers: [CategoryController, CategoryApiController],
  exports: [CategoryService],
})
export class CategoryModule {}
