import { Store } from 'vuex'
import { RouteLocationNormalizedLoaded } from 'vue-router'
import { ISSRContext } from 'ssr-types'

interface Params {
  store: Store<any>
  router: RouteLocationNormalizedLoaded
}

export default async ({ store, router }: Params, ctx?: ISSRContext<any>) => {
}
