import type { ModuleTree } from 'vuex'
import { appStore } from './modules/app'

const modules: ModuleTree<any> = {
  appStore,
}
export { modules }
