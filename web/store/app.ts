import { MutationTree, ActionTree } from 'vuex'

export interface RootState {
  theme: ITheme
}

interface ITheme {
  mode: 'light' | 'dark'
}

export const state: RootState = {
  theme: {
    mode: 'light',
  },
}

export const MutationTypes = {
  UPDATE_THEME: 'updateTheme',
}

export const ActionTypes = {
  UPDATE_THEME: 'updateTheme',
}

export const mutations: MutationTree<RootState> = {
  [MutationTypes.UPDATE_THEME](state, theme: ITheme) {
    state.theme = {
      ...state.theme,
      ...theme,
    }
  },
}

export const actions: ActionTree<RootState, RootState> = {
  [ActionTypes.UPDATE_THEME]({ commit, state }) {
    commit(MutationTypes.UPDATE_THEME,)
  },
}
