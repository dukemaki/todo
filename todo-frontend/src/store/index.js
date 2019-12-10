import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseUrl:'http://localhost:8080/todo/todo-backend'
  },
  mutations: {},
  actions: {},
  modules: {}
});
