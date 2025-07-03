import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    accessToken: null,
    messages: [],
    isAuthenticated: false
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user
      state.isAuthenticated = true
    },

    SET_ACCESS_TOKEN(state, token) {
      state.accessToken = token
    },

    SET_MESSAGES(state, messages) {
      state.messages = messages
    },

    LOGOUT(state) {
      state.user = null
      state.accessToken = null
      state.messages = []
      state.isAuthenticated = false
    }
  },

  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user)
    },

    setAccessToken({ commit }, token) {
      commit('SET_ACCESS_TOKEN', token)
    },

    setMessages({ commit }, messages) {
      commit('SET_MESSAGES', messages)
    },

    logout({ commit }) {
      commit('LOGOUT')
    }
  },

  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    user: (state) => state.user,
    accessToken: (state) => state.accessToken,
    messages: (state) => state.messages
  }
})
