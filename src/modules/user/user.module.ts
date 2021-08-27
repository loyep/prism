import { Module } from '@nestjs/common'

// Controllers
import { UserController } from './user.controller'
import { UserApiController } from './api.controller'

// Services
import { UserService } from './user.service'
import { FollowService } from './follow.service'

@Module({
  imports: [],
  providers: [
    UserService,
    FollowService
  ],
  controllers: [UserController, UserApiController],
  exports: [
    UserService,
  ],
})
export class UserModule {}
