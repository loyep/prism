import { Injectable } from '@nestjs/common';
import {
  Category,
  Prisma
} from '@prisma/client';
import { PrismaService } from '~/prisma';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async getCategory(CategoryWhereUniqueInput: Prisma.CategoryWhereUniqueInput): Promise<Category | null> {
    return this.prisma.category.findUnique({
      where: CategoryWhereUniqueInput,
    });
  }

  async categories(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CategoryWhereUniqueInput;
    where?: Prisma.CategoryWhereInput;
    orderBy?: Prisma.CategoryOrderByInput;
  } = {}): Promise<Category[]> {
    const { skip, take, cursor, where, orderBy } = params;
  
    return this.prisma.category.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createCategory(data: Prisma.CategoryCreateInput): Promise<Category> {
    return this.prisma.category.create({
      data,
    });
  }

  async updateCategory(params: {
    where: Prisma.CategoryWhereUniqueInput;
    data: Prisma.CategoryUpdateInput;
  }): Promise<Category> {
    const { where, data } = params;
    return this.prisma.category.update({
      data,
      where,
    });
  }

  async deleteCategory(where: Prisma.CategoryWhereUniqueInput): Promise<Category> {
    return this.prisma.category.delete({
      where,
    });
  }
}