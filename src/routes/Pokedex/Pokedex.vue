<script lang="ts">
import { computed, defineComponent, onMounted, reactive, toRefs } from 'vue';

import pokemonApi from '../../lib/api/pokemonApi';
import Spinner from '../../components/Spinner.vue';
import { Pokemon } from '../../models/Pokemon';
import Button from '../../components/Button.vue';
import NoResults from '../../components/NoResults.vue';

import CardContainer from './components/CardContainer.vue';
import PokemonCard from './components/PokemonCard.vue';

interface PokedexState {
  pokemon: Pokemon;
  loading: boolean;
  loadingMore: boolean;
}

export default defineComponent({
  name: 'Home',
  components: {
    Spinner,
    PokemonCard,
    Button,
    CardContainer,
    NoResults,
  },
  setup() {
    const state = reactive<PokedexState>({
      pokemon: {
        count: 0,
        next: undefined,
        previous: undefined,
        results: [],
      },
      loading: true,
      loadingMore: false,
    });

    const currentlyVisible = computed(() => state.pokemon.results.length);

    const fetchPokemon = async () => {
      state.loading = true;

      const res = await pokemonApi.getPokemon();
      state.pokemon = res;

      state.loading = false;
    };

    const loadMore = async () => {
      state.loadingMore = true;
      const res = await pokemonApi.getPokemon(state.pokemon.next);
      state.pokemon = {
        ...res,
        results: [...state.pokemon.results, ...res.results],
      };
      state.loadingMore = false;
    };

    onMounted(() => {
      fetchPokemon();
    });

    return {
      ...toRefs(state),
      loadMore,
      currentlyVisible,
    };
  },
});
</script>

<template>
  <Spinner v-if="loading" is-overlay />
  <div v-else-if="currentlyVisible > 0 && !loading" class="pb-8 text-center">
    <p class="mt-2">
      Viewing {{ currentlyVisible }} of {{ pokemon.count }} results
    </p>
    <CardContainer>
      <div v-for="p in pokemon.results" :key="p.id">
        <PokemonCard
          :name="p.name"
          :front-image="p.sprites.front_default"
          :back-image="p.sprites.back_default"
          :hp="p.stats[0].base_stat"
        />
      </div>
    </CardContainer>
    <Button :loading="loadingMore" @click="loadMore">Load More</Button>
  </div>
  <NoResults v-else />
</template>
