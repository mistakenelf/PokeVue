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
