import { Inject } from '@nestjs/common'
import { Injectable } from '@nestjs/common'
import { View } from '@prisma/client'
import { PrismaService } from '~/prisma'
import { LoggerService } from './logger.service'
// import { logger } from '@leaa/api/src/utils';

@Injectable()
export class LoggerApiService {
  @Inject(PrismaService) private readonly prisma: PrismaService
  @Inject(LoggerService) private readonly logger: LoggerService;

  log(data: Pick<View, 'ip' | 'url'>) {
    this.prisma.view
      .create({
        data,
      })
      .then(() => {
        this.logger.log(JSON.stringify(data));
      })
  }
}
