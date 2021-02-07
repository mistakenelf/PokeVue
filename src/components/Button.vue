<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    type: {
      type: String as PropType<'button' | 'submit' | 'reset'>,
      default: 'button',
    },
    onClick: {
      type: Function,
    },
  },
});
</script>

<template>
  <button
    @click="$emit('handle-click')"
    :type="type"
    class="bg-red-600 text-white px-4 py-2 rounded border-4 border-black"
  >
    <slot />
  </button>
</template>
