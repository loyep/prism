import { Injectable } from '@nestjs/common'
import { Article, Prisma } from '@prisma/client'
import { PrismaService } from '~/prisma'

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}

  async getArticle(ArticleWhereUniqueInput: Prisma.ArticleWhereUniqueInput): Promise<Article | null> {
    return this.prisma.article.findUnique({
      where: ArticleWhereUniqueInput,
    })
  }

  async articles(
    params: {
      skip?: number
      take?: number
      cursor?: Prisma.ArticleWhereUniqueInput
      where?: Prisma.ArticleWhereInput
      orderBy?: Prisma.ArticleOrderByInput
    } = {},
  ): Promise<Article[]> {
    const { skip, take, cursor, where, orderBy } = params
    return this.prisma.article.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    })
  }

  async createArticle(data: Prisma.ArticleCreateInput): Promise<Article> {
    return this.prisma.article.create({
      data,
    })
  }

  async updateArticle(params: {
    where: Prisma.ArticleWhereUniqueInput
    data: Prisma.ArticleUpdateInput
  }): Promise<Article> {
    const { where, data } = params
    return this.prisma.article.update({
      data,
      where,
    })
  }

  async deleteArticle(where: Prisma.ArticleWhereUniqueInput): Promise<Article> {
    return this.prisma.article.delete({
      where,
    })
  }

  async getArticleIdBySlug(slug: string): Promise<number | null> {
    const article = await this.prisma.article.findFirst({ where: { slug: slug }, select: { id: true } })
    return article ? article.id : null
  }

  async getFavoritesByArticle(slug: string): Promise<any[]> {
    const articleId = await this.getArticleIdBySlug(slug)

    if (!articleId) return []

    return this.prisma.user.findMany({
      where: {
        favorites: {
          some: {
            articleId,
          },
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
        slug: true,
      },
    })
  }

  async getTagsByArticle(slug: string): Promise<any[]> {
    const articleId = await this.getArticleIdBySlug(slug)

    if (!articleId) return []

    return this.prisma.tag.findMany({
      where: {
        articles: {
          some: {
            articleId,
          },
        },
      },
      select: {
        id: true,
        slug: true,
      },
    })
  }
}
