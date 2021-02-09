<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardContainer',
});
</script>

<template>
  <div class="m-6 grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 gap-4">
    <slot />
  </div>
</template>
