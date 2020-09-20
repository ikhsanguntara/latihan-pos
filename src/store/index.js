import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import createPersistedState from "vuex-persistedstate";
import categories from './modules/categories'

import axios from "../axios"

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({ key: "local", paths: ["token"] }),
  ],
  state: {
    token: null,
    dialog: {},
    step: 2,

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
    },
    set_step(state, payload) {
      state.step = payload
    },
  },
  actions: {
    login: ({ commit },params) => {
      // commit("login", "TOKEN");
      // router.push("/dashboard");
      axios.post("login", params)
        .then((res) => {
          console.log("data", res.data);
          commit("login", res.data.token);
          router.push("/dashboard");
        })
        .catch((error) => console.log(error));

    },
    logout: ({ commit }) => {
      commit("logout");
      router.push("/login")
    }
  },
  modules: {
    categories,
  }
})
