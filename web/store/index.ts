import type { ModuleTree } from 'vuex'
import { app } from './modules/app'

const modules: ModuleTree<any> = {
  app,
}
export { modules }
