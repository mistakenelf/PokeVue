<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PokemonCard',
  props: {
    name: {
      type: String,
    },
    frontImage: {
      type: String,
    },
  },
});
</script>

<template>
  <div class="flex flex-col rounded-lg items-center bg-white shadow-lg">
    <div class="text-2xl font-bold uppercase text-gray-700">
      {{ name }}
    </div>
    <img :src="frontImage" height="350" width="350" />
  </div>
</template>
