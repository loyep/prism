import { Module } from '@nestjs/common'
import { MulterModule } from '@nestjs/platform-express'
// import dayjs from 'dayjs'
import { memoryStorage } from 'multer'
import { MediaApiController } from './api.controller'
import { MediaApiService } from './api.service'
// Controllers
import { MediaController } from './media.controller'
// Services
import { MediaService } from './media.service'


// import fs from 'fs'
// import path from 'path'
// import crypto from 'crypto'

@Module({
  imports: [
    MulterModule.register({
      // storage: diskStorage({
      //   //自定义路径
      //   destination: (req, file, cb) => {
      //     const destination = `./public/upload/${dayjs().format('YYYY/MM/DD')}`
      //     const dir = path.join(process.cwd(), destination)
      //     if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
      //     cb(null, destination)
      //   },
      //   filename: (req, file, cb) => {
      //     console.log(file)
      //     console.log(req)
      //     const md5 = crypto.createHash('md5').update(file.buffer).digest('hex').toString()
      //     cb(null, `${md5}.${file.mimetype.split('/')[1]}`)
      //   },
      // }),
      storage: memoryStorage()
    }),
  ],
  providers: [MediaService, MediaApiService],
  controllers: [MediaController, MediaApiController],
  exports: [MediaService],
})
export class MediaModule {}
