import { Module } from '@nestjs/common'
import { DetailModule } from './modules/detail-page/detail.module'
import { indexModule } from './modules/index-page/index.module'
import { PrismaModule } from './prisma'

@Module({
  imports: [DetailModule, indexModule, PrismaModule]
})
export class AppModule {}
