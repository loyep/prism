import { Controller, Get, Param } from '@nestjs/common'
import { UserService } from './user.service'
import _ from 'lodash'
import { User } from '@prisma/client'
// import { hashSync } from 'bcrypt'

@Controller('/api')
export class UserApiController {
  constructor(private readonly service: UserService) {}

  @Get('/users')
  async getUsers() {
    const users = await this.service.users()
    return users
  }

  @Get('/users/:slug')
  async getUserBySlug(@Param('slug') slug: string) {
    const user = await this.service.getUser({
      slug,
    })
    return _.omit<User>(user, ['password'])
  }

  @Get('/users/:slug/followers')
  async getUserFollowers(@Param('slug') slug: string) {
    // const followers = await this.service.getUserFollowers
  }

  @Get('/users/:slug/likes')
  async getUserLikes(@Param('slug') slug: string) {
    return await this.service.getLikesByUser(slug)
    // const followers = await this.service.getUserFollowers
  }

  @Get('/users/:slug/favorites')
  async getUserFavorites(@Param('slug') slug: string) {
    return await this.service.getFavoritesByUser(slug)
    // const followers = await this.service.getUserFollowers
  }
}
