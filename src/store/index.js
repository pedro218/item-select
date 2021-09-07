import { createStore } from 'vuex'
import { login } from '../services/login'

export default createStore({
  state: {
    user: '',
    info: {},
  },
  mutations: {
    setState(state, response) {
      state.user = response.name
      state.info = response.info
    },
    clearUser(state) {
      state.user = ''
      state.info = {}
    },
  },
  actions: {
    login({ commit }, { username, password }) {
      const response = login(username, password)
      if (response) {
        commit('setState', response)
        return true
      }
      return null
    },
    logout({ commit }) {
      commit('clearUser')
    },
  },
  getters: {
    getUser(state) {
      return state.user
    },
    getinfo(state) {
      return state.info
    },
  },
  modules: {},
})
