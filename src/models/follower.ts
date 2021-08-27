import { Follower as PrismaFollower } from '@prisma/client'

export class Follower implements PrismaFollower {
  followerId: number
  followingId: number
  createdAt: Date
  updatedAt: Date
}
