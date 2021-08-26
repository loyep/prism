import { Controller, Get } from '@nestjs/common'
import { PrismaService } from '~/prisma'
import { ApiService } from './index.service'

@Controller('/api')
export class ApiController {
  constructor(private readonly apiService: ApiService, private readonly prisma: PrismaService) {}

  @Get('/index')
  async getIndexData(): Promise<any> {
    return await this.apiService.index()
  }

  @Get('/test')
  async getTestData(): Promise<any> {
    return this.prisma.article.findMany({
      select: {
        title: true,
        image: true,
        slug: true,
        cover: true,
        id: true,
        category: true,
        user: {
          select: {
            id: true,
            name: true,
            slug: true,
          }
        }
      },
      take: 20,
      orderBy: {
        id: 'desc'
      }
    })
  }
}
