import { Category as PrismaCategory } from '@prisma/client'
import { Exclude, Transform } from 'class-transformer'
import dayjs from 'dayjs'

export class CategoryModel implements PrismaCategory {
  id: number
  slug: string
  name: string
  description: string

  @Transform(({ value }) => dayjs(value).format('YYYY-MM-DD HH:mm:ss'), { toClassOnly: true })
  createdAt: Date

  @Transform(({ value }) => dayjs(value).format('YYYY-MM-DD HH:mm:ss'), { toClassOnly: true })
  updatedAt: Date

  @Exclude()
  article_count: number
}
