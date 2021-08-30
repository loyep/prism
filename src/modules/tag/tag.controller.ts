import { render } from '@kova/ssr'
import { Controller, Get, Param, Req, Res } from '@nestjs/common'
import { Readable } from 'stream'
import { TagApiService } from './api.service'

@Controller()
export class TagController {
  constructor(private readonly apiService: TagApiService) {}
  
  @Get('/tag/:slug')
  async getTag(@Param('slug') slug: string, @Req() req, @Res() res) {
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
