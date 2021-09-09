import { Module } from 'vuex'

interface AppState {
  darkMode?: 'light' | 'dark'
}

const appStore: Module<AppState, any> = {
  namespaced: true,
  state: {
    darkMode: 'light',
  },
  mutations: {
    setDarkMode(state, payload) {
      state.darkMode = payload.mode
    },
  },
  actions: {
    setDarkMode({ commit }, { payload }) {
      commit('setDarkMode', payload)
    },
  },
}

export { appStore }
