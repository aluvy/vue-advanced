import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView';
import AskView from '../views/AskView';
import JobsView from '../views/JobsView';
import ItemView from '../views/ItemView';
import UserView from '../views/UserView';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      // path: url 주소에 대한 정보
      path: '/news',
      // component: url 주소로 접속했을 때 표시될 컴포넌트
      name: 'news',
      component: NewsView,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
    },
    {
      path: '/item/:id',
      name: 'item',
      component: ItemView,
    },
    {
      path: '/user/:id',
      name: 'user',
      component: UserView,
    },
  ],
});
