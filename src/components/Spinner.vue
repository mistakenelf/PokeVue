<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Spinner',
  props: {
    width: {
      type: Number,
      default: 30,
    },
    height: {
      type: Number,
      default: 30,
    },
    isOverlay: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<template>
  <div
    v-if="isOverlay"
    class="flex items-center justify-center h-full w-full fixed top-0 left-0 z-10 bg-gray-700 bg-opacity-85"
  >
    <div class="h-full w-full fixed top-0 left-0" />
    <div
      class="inline-block animate-spin ease duration-300 w-5 h-5 bg-blue-600 mx-2"
    ></div>
  </div>
  <div
    v-else
    class="inline-block animate-spin ease duration-300 w-5 h-5 bg-blue-600 mx-2"
  ></div>
</template>
