import { SsrRender } from '@/core/render'
import { render } from '@kova/ssr'
import { Controller, Get, Param, Req, Res } from '@nestjs/common'
import type { Request } from 'express'
import { Readable } from 'stream'
import { ArticleApiService } from './api.service'

@Controller()
export class ArticleController {
  constructor(private readonly apiService: ArticleApiService) {}

  @Get('/')
  @SsrRender({ cache: true })
  async handlerIndex(@Res({ passthrough: true }) res: Request) {
    return {
      apiService: this.apiService,
    }
  }

  @Get('/article/:slug')
  async getArticleBySlug(@Param('slug') slug: string, @Req() req, @Res() res) {
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
