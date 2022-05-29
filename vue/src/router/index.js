import Vue from 'vue';
import VueRouter from 'vue-router';
import Portfolio from '@/views/Portfolio.vue';
import Work from '@/views/Work.vue';
import store from '@/store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Portfolio',
    component: Portfolio,
    meta: { title: store.state.main.title },
  },
  {
    path: '/work/:id',
    name: 'Work',
    component: Work,
    meta: { title: store.state.main.title },
  },
];

const DEFAULT_TITLE = 'Default Title';

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});

export default router;
