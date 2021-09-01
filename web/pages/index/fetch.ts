import { WrapFetch } from "@/core/fetch"
import { HomeProps } from './config'

interface IApiService {
  findBySlug: (slug: string) => Promise<any>
  findBySlug2: (slug: string) => Promise<any>
}

interface ServerContext {
  service?: IApiService
}

export default WrapFetch<ServerContext, HomeProps>(async () => {

  return {
    props: {

    }
  }
})
