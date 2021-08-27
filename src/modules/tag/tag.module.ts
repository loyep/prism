import { Module } from '@nestjs/common'

// Controllers
import { TagController } from './tag.controller'
import { TagApiController } from './api.controller'

// Services
import { TagService } from './tag.service'

@Module({
  imports: [],
  providers: [
    TagService,
  ],
  controllers: [TagController, TagApiController],
  exports: [
    TagService,
  ],
})
export class TagModule {}
