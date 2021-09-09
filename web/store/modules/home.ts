import { Module } from 'vuex'

interface HomeState {
  articles: any[]
}

const home: Module<HomeState, any> = {
  namespaced: true,
  state: {
    articles: []
  },
  mutations: {
    initData(state, payload) {
      state.articles = payload
    }
  },
  actions: {
    initData({ commit }, { payload }) {
      commit('initData', payload)
    },
  },
}

export { home }
