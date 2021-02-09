<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NoResults',
});
</script>

<template>
  <div class="h-full w-full flex items-center justify-center px-4">
    <div
      class="text-pokemon-yellow text-2xl border-4 border-pokemon-yellow p-8 text-center"
    >
      No Pokemon found
    </div>
  </div>
</template>
