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

<style scoped>
.nav {
  background: #000;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header {
  color: #fff;
}
</style>

<template>
  <nav class="nav">
    <h1 class="header">PokeVue</h1>
  </nav>
  <slot />
</template>
