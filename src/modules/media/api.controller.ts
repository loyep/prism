import { MediaModel } from '@/models/media'
import { Controller, Delete, Get, Param, Post, Query, UploadedFiles, UseInterceptors } from '@nestjs/common'
import { FilesInterceptor } from '@nestjs/platform-express'
import path from 'path'
import { MediaApiService } from './api.service'
import { MediaService } from './media.service'
// import { hashSync } from 'bcrypt'
import crypto from 'crypto'
import dayjs from 'dayjs'
import fs from 'fs'
import { HttpException } from '@nestjs/common'

function string10to62(number: number) {
  const chars = 'ABCDEFGHIGKLMNOPQRSTUVWXYZ0123456789abcdefghigklmnopqrstuvwxyz'.split('')
  const radix = chars.length
  let qutient = +number
  let arr = []
  let mod = 0
  do {
    mod = qutient % radix
    qutient = (qutient - mod) / radix
    arr.unshift(chars[mod])
  } while (qutient)
  return arr.join('')
}

@Controller('/api')
export class MediaApiController {
  constructor(private readonly service: MediaService, private readonly apiService: MediaApiService) {}

  @Get('/medias')
  async getMedia(@Query('q') q: string) {
    return await this.apiService.medias()
  }

  @Get('/medias/:id')
  async getMediaBySlug(@Param('id') id: number) {
    return await this.apiService.getMedia(id)
  }

  @Post('/medias')
  @UseInterceptors(FilesInterceptor('file'))
  async createMedia(@UploadedFiles() files: Express.Multer.File[]) {
    try {
      //       const destination = `./public/upload/${dayjs().format('YYYY/MM/DD')}`
      // const dir = path.join(process.cwd(), destination)
      // if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
      const medias: Pick<MediaModel, 'filename' | 'alt' | 'type' | 'path'>[] = files.map((file) => {
        const [type, extname = path.extname(file.originalname)] = file.mimetype.split('/')
        const filename = string10to62(parseInt(crypto.createHash('md5').update(file.buffer).digest('hex'), 16))
        return {
          filename: `${filename}.${extname}`,
          alt: '',
          description: '',
          path: `/upload/${dayjs().format('YYYY/MM/DD')}/${filename}.${extname}`,
          type,
        }
      })

      for (const file of files) {
        const [type, extname = path.extname(file.originalname)] = file.mimetype.split('/')
        const filename = string10to62(parseInt(crypto.createHash('md5').update(file.buffer).digest('hex'), 16))
        const dir = `upload/${dayjs().format('YYYY/MM/DD')}`
        const media: Pick<MediaModel, 'filename' | 'alt' | 'type' | 'path' | 'description'> = {
          filename: `${filename}.${extname}`,
          alt: '',
          description: '',
          path: `/${dir}/${filename}.${extname}`,
          type,
        }
        const resoleFileDir = path.resolve(process.cwd(), 'public', dir)
        const resoleFilePath = path.resolve(resoleFileDir, media.filename)
        if (fs.existsSync(resoleFilePath)) throw new HttpException(`文件已存在${media.path}`, 400)
        console.log(resoleFileDir)
        if (!fs.existsSync(resoleFileDir)) fs.mkdirSync(resoleFileDir, { recursive: true })
        fs.writeFileSync(path.resolve(resoleFileDir, media.filename), file.buffer)
        await this.service.createMedia(media)
      }
      console.log(medias)
      // const filesData = await this.service.createMedias(medias)
      // return filesData
      return 1
    } catch (error) {
      console.log(error)
      throw error
      // this.service.removeFiles(files)
    }
    console.log(files)

    // const res = await this.service.createMedia(media as any)
    // return await this.service.getTagsByMedia(slug)
    // console.log(res)
    return 1
  }

  @Delete('/medias/:id')
  async deleteMedia(@Param('id') id: number) {
    const media = await this.service.getMedia({ id })
    return await this.service.deleteMedia({ id: media.id })
  }
}