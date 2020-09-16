import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({ key: "local", paths: ["token"] }),
  ],
  state: {
    token: null,
    dialog: {},

  },
  getters: {
    token: (state) => {
      return state.token;
    },
  },
  mutations: {
    login: (state, token) => {
      state.token = token;
    },
    logout: (state) => {
      state.token = null;
    }
  },
  actions: {
    login: ({ commit }) => {
      commit("login", "TOKEN");
      router.push("/dashboard");
    },
    logout: ({ commit }) => {
      commit("logout");
      router.push("/login")
    }
  },
  modules: {

  }
})
