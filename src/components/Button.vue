<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
});
</script>

<template>
  <button class="bg-red-600 text-white px-4 py-2 rounded border-4 border-black">
    <slot />
  </button>
</template>
