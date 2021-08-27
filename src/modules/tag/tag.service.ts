import { Injectable } from '@nestjs/common';
import {
  Tag,
  Article,
  Prisma
} from '@prisma/client';
import { PrismaService } from '~/prisma';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  async getTag(TagWhereUniqueInput: Prisma.TagWhereUniqueInput): Promise<Tag | null> {
    return this.prisma.tag.findUnique({
      where: TagWhereUniqueInput,
    });
  }

  async getArticlesByTag(slug: string): Promise<Article[]> {
    return this.prisma.article.findMany({
      where: {
        // sl
      }
    })
  }

  async tags(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TagWhereUniqueInput;
    where?: Prisma.TagWhereInput;
    orderBy?: Prisma.TagOrderByInput;
  } = {}): Promise<Tag[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.tag.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createTag(data: Prisma.TagCreateInput): Promise<Tag> {
    return this.prisma.tag.create({
      data,
    });
  }

  async updateTag(params: {
    where: Prisma.TagWhereUniqueInput;
    data: Prisma.TagUpdateInput;
  }): Promise<Tag> {
    const { where, data } = params;
    return this.prisma.tag.update({
      data,
      where,
    });
  }

  async deleteTag(where: Prisma.TagWhereUniqueInput): Promise<Tag> {
    return this.prisma.tag.delete({
      where,
    });
  }
}