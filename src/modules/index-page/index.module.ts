import { Module } from "@nestjs/common";
import { AppController } from "./index.controller";
import { ApiController } from "./api.controller";
import { ApiService } from "./index.service";
import { PrismaModule } from "src/prisma";

@Module({
  imports: [PrismaModule],
  controllers: [AppController, ApiController],
  providers: [ApiService],
})
export class indexModule {}
