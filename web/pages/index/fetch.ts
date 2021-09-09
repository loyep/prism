import { Store } from 'vuex'
import { RouteLocationNormalizedLoaded } from 'vue-router'
import { ISSRContext } from 'ssr-types'

interface Params {
  store: Store<any>
  router: RouteLocationNormalizedLoaded
}

export default async ({ store, router }: Params, ctx?: ISSRContext<any>) => {
  // 阅读文档获得更多信息 http://doc.ssr-fc.com/docs/features$fetch#%E5%88%A4%E6%96%AD%E5%BD%93%E5%89%8D%E7%8E%AF%E5%A2%83
  const data = __isBrowser__ ? await (await window.fetch('/api/index')).json() : ctx.pageProps
  await store.dispatch('home/initData', { payload: data })
}
