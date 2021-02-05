import { createRouter, createWebHistory } from 'vue-router';

import DefaultLayout from '../layouts/DefaultLayout.vue';
import { RoutePaths } from '../lib/constants';

import Home from './Home/Home.vue';

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: RoutePaths.Home,
      component: Home,
      name: 'Home',
      meta: {
        layout: DefaultLayout,
      },
    },
  ],
});

export { router };
