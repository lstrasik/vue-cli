import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false
  },
  mutations: {
    SET_DRAWER(state, value){
      state.drawer = value;
    },
  },
  actions: {
    setDrawer({ commit }, data) {
      commit("SET_DRAWER", data);
    },
  },
  getters: {
    drawer(state) {
      return state.drawer;
    }
  },
  modules: {
  }
})
