import { render } from '@kova/ssr'
import { Req, Res } from '@nestjs/common'
import { Get, Param } from '@nestjs/common'
import { Controller } from '@nestjs/common'
import { Readable } from 'stream'
import { CategoryApiService } from './api.service'

@Controller()
export class CategoryController {
  constructor(private readonly apiService: CategoryApiService) {}

  @Get('/category')
  async categories(@Req() req, @Res() res) {
    try {
      const ctx = {
        request: req,
        response: res,
        apiService: this.apiService,
      }
      const stream = await render<Readable>(ctx, {
        stream: true,
      })
      stream.pipe(res, { end: false })
      stream.on('end', () => {
        res.end()
      })
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }

  @Get('/category/:slug')
  async getCategoryBySlug(@Param('slug') slug: string, @Req() req, @Res() res) {
    try {
      const ctx = {
        request: req,
        response: res,
        apiService: this.apiService,
      }
      const stream = await render<Readable>(ctx, {
        stream: true,
      })
      stream.pipe(res, { end: false })
      stream.on('end', () => {
        res.end()
      })
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
}
