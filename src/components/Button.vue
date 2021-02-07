<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    onClick: {
      type: Function,
      required: true,
    },
  },
});
</script>

<template>
  <button
    :type="type"
    class="bg-red-600 text-white px-4 py-2 rounded border-4 border-black"
  >
    <slot />
  </button>
</template>
