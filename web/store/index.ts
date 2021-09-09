import type { ModuleTree } from 'vuex'
import { app } from './modules/app'
import { home } from './modules/home'

const modules: ModuleTree<any> = {
  app,
  home,
}
export { modules }
