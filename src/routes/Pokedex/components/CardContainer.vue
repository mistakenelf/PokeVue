<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardContainer',
});
</script>

<template>
  <div
    class="p-4 grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
  >
    <slot />
  </div>
</template>
