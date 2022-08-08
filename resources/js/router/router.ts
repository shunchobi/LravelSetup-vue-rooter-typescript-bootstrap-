import * as VueRouter from "vue-router";

import Home from '../views/Home.vue';
import Foo from '../views/Foo.vue';
import Bar from '../views/Bar.vue';

// パスとコンポーネントのマッピング
const routes = [
  { path: '/', component: Home },
  { path: '/bar', component: Bar },
  { path: '/foo', component: Foo },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes, 
})

export default router;