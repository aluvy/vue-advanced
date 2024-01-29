import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: {},
  },
  getters: {
    news: (state) => state.news,
    jobs: (state) => state.jobs,
    ask: (state) => state.ask,
    user: (state) => state.user,
  },
  mutations,
  actions,
});
