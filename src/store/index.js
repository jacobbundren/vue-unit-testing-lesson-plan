import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    authenticatedUser: null,
  },
  mutations: {
    setAuthenticatedUser: (state, user) => {
      state.authenticatedUser = user;
    }
  },
  actions: {
    login: function({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        if (credentials.username === "admin" && credentials.password === "password") {
          commit("setAuthenticatedUser", credentials.username);
          resolve();
        } else {
          reject("Invalid Credentials");
        }
      })
    },
    logout: function({ commit }) {
      commit("setAuthenticatedUser", null);
    }
  },
  modules: {
  }
})
