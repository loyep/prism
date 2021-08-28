import { Prisma, User as PrismaUser } from '@prisma/client'
import { Exclude, Transform } from 'class-transformer'
import dayjs from 'dayjs'

export class UserModel implements PrismaUser {
  id: number
  email: string
  name: string
  slug: string
  url: string
  meta: Prisma.JsonValue
  cover: string
  bio: string
  description: string
  mobile: string
  openid: string

  @Exclude()
  password: string

  @Transform(({ value }) => dayjs(value).format('YYYY-MM-DD HH:mm:ss'), { toClassOnly: true })
  loggedAt: Date

  @Transform(({ value }) => dayjs(value).format('YYYY-MM-DD HH:mm:ss'), { toClassOnly: true })
  createdAt: Date

  @Transform(({ value }) => dayjs(value).format('YYYY-MM-DD HH:mm:ss'), { toClassOnly: true })
  updatedAt: Date

  @Exclude()
  deleteAt: Date
}
