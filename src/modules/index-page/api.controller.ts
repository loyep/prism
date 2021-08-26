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
    return this.prisma.user.findMany({
      select: {
        name: true,
        email: true,
        id: true,
        articles: {
          select: {
            title: true,
            id: true,
          },
        },
      },
      take: 20,
      orderBy: {
        id: 'desc'
      }
    })
  }
}
