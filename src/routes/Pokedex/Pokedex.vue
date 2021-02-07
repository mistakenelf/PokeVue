<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';

import { getPokemonList } from '../../lib/api/pokemonApi';
import Spinner from '../../components/Spinner.vue';
import PokemonCard from '../../components/PokemonCard.vue';
import { Pokemon } from '../../models/Pokemon';
import Button from '../../components/Button.vue';

interface PokedexState {
  pokemon: Pokemon;
  loading: boolean;
}

export default defineComponent({
  name: 'Home',
  components: {
    Spinner,
    PokemonCard,
    Button,
  },
  setup() {
    const state = reactive<PokedexState>({
      pokemon: {
        count: 0,
        next: undefined,
        previous: undefined,
        pokemon: [],
      },
      loading: true,
    });

    const fetchPokemon = async () => {
      state.loading = true;

      const res = await getPokemonList();
      state.pokemon = res;

      state.loading = false;
    };

    const loadMore = async () => {
      const res = await getPokemonList(state.pokemon.next);
      state.pokemon = {
        ...res,
        pokemon: [...state.pokemon.pokemon, ...res.pokemon],
      };
    };

    onMounted(() => {
      fetchPokemon();
    });

    return {
      ...toRefs(state),
      loadMore,
    };
  },
});
</script>

<template>
  <Spinner v-if="loading" isOverlay />
  <div
    v-else-if="pokemon.pokemon.length > 0 && !loading"
    class="pb-8 text-center"
  >
    <div class="m-6 grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="p in pokemon.pokemon" :key="p.id">
        <PokemonCard :name="p.name" :frontImage="p.sprites.front_default" />
      </div>
    </div>
    <Button @click="loadMore">Load More</Button>
  </div>
  <div v-else>No pokemon found</div>
</template>
