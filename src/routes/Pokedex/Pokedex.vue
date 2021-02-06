<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

import { getPokemon, getPokemonDetails } from '../../lib/api/pokemonApi';
import Spinner from '../../components/Spinner.vue';
import PokemonCard from '../../components/PokemonCard.vue';
import { PokemonDetails } from '../../models/Pokemon';

export default defineComponent({
  name: 'Home',
  components: {
    Spinner,
    PokemonCard,
  },
  setup() {
    const pokemon = ref<PokemonDetails[]>([]);
    const loading = ref(true);

    const fetchPokemon = async () => {
      loading.value = true;

      const res = await getPokemon();

      res.results.map(async (pkmon) => {
        const pokemonDetails = await getPokemonDetails(pkmon.url);
        pokemon.value = [...pokemon.value, pokemonDetails].sort((a, b) =>
          a.order > b.order ? 1 : -1,
        );

        loading.value = false;

        return { ...pokemonDetails };
      });
    };

    onMounted(() => {
      fetchPokemon();
    });

    return {
      pokemon,
      loading,
    };
  },
});
</script>

<template>
  <Spinner v-if="loading" isOverlay />
  <div
    v-else-if="pokemon.length > 0 && !loading"
    class="m-6 pb-8 grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 gap-4"
  >
    <div v-for="p in pokemon" :key="p.id">
      <PokemonCard :name="p.name" :frontImage="p.sprites.front_default" />
    </div>
  </div>
  <div v-else>No pokemon found</div>
</template>
