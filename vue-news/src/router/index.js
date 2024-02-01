import Vue from 'vue';
import VueRouter from 'vue-router';
import EventBus from '../utils/EventBus.js';
import { store } from '../store/index.js';

import NewsView from '../views/NewsView';
// import AskView from '../views/AskView';
// import JobsView from '../views/JobsView';
import ItemView from '../views/ItemView';
import UserView from '../views/UserView';

import createListView from '../views/CreateListView.js'; // high order component

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      // component: createListView('NewsView'),
      beforeEnter: (to, from, next) => setBeforeEnter(to, from, next, 'FETCH_LIST'),
    },
    {
      path: '/jobs',
      name: 'jobs',
      // component: JobsView,
      component: createListView('JobsView'), // high order component
      beforeEnter: (to, from, next) => setBeforeEnter(to, from, next, 'FETCH_LIST'),
    },
    {
      path: '/ask',
      name: 'ask',
      // component: AskView,
      component: createListView('AskView'), // high order component
      beforeEnter: (to, from, next) => setBeforeEnter(to, from, next, 'FETCH_LIST'),
    },

    {
      path: '/item/:id',
      name: 'item',
      component: ItemView,
      beforeEnter: (to, from, next) => setBeforeEnter(to, from, next, 'FETCH_ITEM'),
    },
    {
      path: '/user/:id',
      name: 'user',
      component: UserView,
      beforeEnter: (to, from, next) => setBeforeEnter(to, from, next, 'FETCH_USER'),
    },
  ],
});

const setBeforeEnter = async (to, from, next, dispatchName) => {
  try {
    let param = to.name;
    if (dispatchName === 'FETCH_ITEM' || dispatchName === 'FETCH_USER') param = to.params.id;

    EventBus.$emit('start:spinner');
    await store.dispatch(dispatchName, param);
    next();
  } catch (e) {
    console.log(e);
  }
};
