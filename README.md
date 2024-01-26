# vue-advanced

## vue CLI 2.x vs 3.x

```shell
* 명령어
  - 2.x : vue init '프로젝트 템플릿 이름(webpack-simple)' '파일 위치'
  - 3.x : vue create '프로젝트 이름'

* 웹팩 설정 파일
  - 2.x : 노출 O
  - 3.x : 노출 X
    - vue.config.js파일에 configureWebpack 항목을 통해 설정 할 수 있다.
    - 자세한 사항은 vue cli 3 공식 사이트에서 확인한다.
    - https://cli.vuejs.org/guide/webpack.html

* 프로젝트 구성
  - 2.x : 깃허브의 템플릿 다운로드
  - 3.x : 플러그인 기반으로 기능 추가

* ES6 이해도
  - 2.x : 필요 X
  - 3.x : 필요 O
```

## router

```shell
$ npm i vue-router@3
```

src/router/index.js
```javascript
import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView';

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      // path: url 주소에 대한 정보
      path: '/news',
      // component: url 주소로 접속했을 때 표시될 컴포넌트
      component: NewsView,
    },
  ],
});
```

src/main.js
```javascript
import { router } from './router/index.js';

new Vue({
  router,
}).$mount('#app');

```