<script lang="ts">
import { defineComponent } from 'vue';

import { RoutePaths } from '../lib/constants';

export default defineComponent({
  name: 'DefaultLayout',

  setup() {
    return {
      RoutePaths,
    };
  },
});
</script>

<template>
  <nav class="bg-black w-full h-16 flex items-center justify-center">
    <h1 class="text-white text-2xl font-bold">PokeVue</h1>
  </nav>
  <slot />
</template>
