<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  name: 'PokemonCard',
  props: {
    name: {
      type: String as PropType<string>,
      default: '',
    },
    hp: {
      type: Number as PropType<number>,
      default: 0,
    },
    frontImage: {
      type: String as PropType<string>,
      default: '',
    },
    backImage: {
      type: String as PropType<string>,
      default: '',
    },
  },
  setup() {
    const reversed = ref(false);

    const reverseImage = () => {
      reversed.value = !reversed.value;
    };

    return {
      reversed,
      reverseImage,
    };
  },
});
</script>

<template>
  <div
    class="flex flex-col items-center rounded-lg bg-pokemon-yellow shadow-lg"
  >
    <div class="flex flex-row items-center justify-between w-full px-2 pt-2">
      <div class="text-lg font-bold uppercase text-pokemon-red">
        {{ name }}
      </div>
      <div class="text-lg flex items-center">
        <span class="text-sm uppercase pr-2">Hp</span>{{ hp }}
      </div>
    </div>
    <img
      v-if="!reversed"
      :src="frontImage"
      height="250"
      width="250"
      :alt="name"
    />
    <img v-else :src="backImage" height="250" width="250" :alt="name" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      class="cursor-pointer ml-auto mr-2 mb-2"
      @click="reverseImage"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"
      />
    </svg>
  </div>
</template>
