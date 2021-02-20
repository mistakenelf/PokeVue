<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<template>
  <component :is="$route.meta.layout">
    <router-view />
  </component>
</template>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body,
#app,
main {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #2a75bb;
  font-family: 'Press Start 2P', cursive;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

pre {
  white-space: pre-line;
}

img {
  max-width: 100%;
  max-height: 100%;
  display: block;
}
</style>
