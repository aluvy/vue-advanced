import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    // news: [],
    // jobs: [],
    // ask: [],
    list: [],
    user: {},
    item: {},
  },
  getters: {
    // news: (state) => state.news,
    // jobs: (state) => state.jobs,
    // ask: (state) => state.ask,
    list: (state) => state.list,
    user: (state) => state.user,
    item: (state) => state.item,
  },
  mutations,
  actions,
});
