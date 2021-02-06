import { createRouter, createWebHistory } from 'vue-router';

import DefaultLayout from '../layouts/DefaultLayout.vue';
import { RoutePaths } from '../lib/constants';

import Pokedex from './Pokedex/Pokedex.vue';

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: RoutePaths.Pokedex,
      component: Pokedex,
      name: 'Pokedex',
      meta: {
        layout: DefaultLayout,
      },
    },
  ],
});

export { router };
