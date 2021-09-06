import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      name: 'user 1',
      ammount: 13,
      path: './images/',
    },
  },
  mutations: {},
  actions: {},
  getters: {
    getUser(state) {
      return state.user
    },
  },
  modules: {},
})
