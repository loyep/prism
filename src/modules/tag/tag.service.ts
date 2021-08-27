import { Injectable } from '@nestjs/common'
import { Tag, Article, Prisma } from '@prisma/client'
import { PrismaService } from '~/prisma'

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  async getTag(TagWhereUniqueInput: Prisma.TagWhereUniqueInput): Promise<Tag | null> {
    return this.prisma.tag.findUnique({
      where: TagWhereUniqueInput,
    })
  }

  async getArticleIdBySlug(slug: string): Promise<number | null> {
    const article = await this.prisma.article.findFirst({ where: { slug: slug }, select: { id: true } })
    return article ? article.id : null
  }

  async getArticlesByTag(slug: string): Promise<Article[]> {
    const tagId = await this.getArticleIdBySlug(slug)
    if (!tagId) return []
    return this.prisma.article.findMany({
      where: {
        tags: {
          some: {
            tagId,
          },
        },
      },
    })
  }

  async tags(
    params: {
      skip?: number
      take?: number
      cursor?: Prisma.TagWhereUniqueInput
      where?: Prisma.TagWhereInput
      orderBy?: Prisma.TagOrderByInput
    } = {},
  ): Promise<Tag[]> {
    const { skip, take, cursor, where, orderBy } = params
    return this.prisma.tag.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    })
  }

  async createTag(data: Prisma.TagCreateInput): Promise<Tag> {
    return this.prisma.tag.create({
      data,
    })
  }

  async updateTag(params: { where: Prisma.TagWhereUniqueInput; data: Prisma.TagUpdateInput }): Promise<Tag> {
    const { where, data } = params
    return this.prisma.tag.update({
      data,
      where,
    })
  }

  async deleteTag(where: Prisma.TagWhereUniqueInput): Promise<Tag> {
    return this.prisma.tag.delete({
      where,
    })
  }
}
