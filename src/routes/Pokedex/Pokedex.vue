<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

import { getPokemon, getPokemonDetails } from '../../lib/api/pokemonApi';
import Spinner from '../../components/Spinner.vue';
import PokemonCard from '../../components/PokemonCard.vue';
import { PokemonDetails, PokemonList } from '../../models/Pokemon';
import Button from '../../components/Button.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Spinner,
    PokemonCard,
    Button,
  },
  setup() {
    const pokemon = ref<PokemonDetails[]>([]);
    const pokemonList = ref<PokemonList | null>(null);
    const loading = ref(true);

    const fetchPokemon = async () => {
      loading.value = true;

      const res = await getPokemon();
      pokemonList.value = res;

      res.results.map(async (pkmon) => {
        const pokemonDetails = await getPokemonDetails(pkmon.url);
        pokemon.value = [...pokemon.value, pokemonDetails];

        loading.value = false;

        return { ...pokemonDetails };
      });
    };

    const loadMore = async () => {
      if (pokemonList?.value?.next) {
        const res = await getPokemon(pokemonList.value.next);
        pokemonList.value = res;
        res.results.map(async (pkmon) => {
          const pokemonDetails = await getPokemonDetails(pkmon.url);
          pokemon.value = [...pokemon.value, pokemonDetails];

          loading.value = false;

          return { ...pokemonDetails };
        });
      }
    };

    onMounted(() => {
      fetchPokemon();
    });

    return {
      pokemon,
      loading,
      loadMore,
    };
  },
});
</script>

<template>
  <Spinner v-if="loading" isOverlay />
  <div v-else-if="pokemon.length > 0 && !loading" class="pb-8 text-center">
    <div class="m-6 grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="p in pokemon" :key="p.id">
        <PokemonCard :name="p.name" :frontImage="p.sprites.front_default" />
      </div>
    </div>
    <Button @click="loadMore">Load More</Button>
  </div>
  <div v-else>No pokemon found</div>
</template>
