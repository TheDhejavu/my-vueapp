import Vue from 'vue';
import Vuex from 'vuex';
import commonStores from "../data";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  getters : {},
  mutations: {},
  actions : {},
  modules : {
    ...commonStores
  }
})