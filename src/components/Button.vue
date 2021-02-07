<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    type: {
      type: String as PropType<'button' | 'submit' | 'reset'>,
      default: 'button',
    },
  },
});
</script>

<template>
  <button
    @click="$emit('handleClick')"
    :type="type"
    class="bg-red-600 text-white px-4 py-2 rounded border-4 border-black"
  >
    <slot />
  </button>
</template>
