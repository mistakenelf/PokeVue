import { ref, onMounted } from 'vue';

import { getRequest } from '../helpers/fetch';
import { PokemonList } from '../../models/Pokemon';

export const usePokemon = () => {
  const pokemon = ref<any>([]);
  const loading = ref(true);

  const fetchPokemon = async () => {
    loading.value = true;

    const res = await getRequest<PokemonList>(
      'https://pokeapi.co/api/v2/pokemon?limit=20',
    );

    res.results.map(async (monster: { name: string; url: string }) => {
      const pokemonDetails = await getRequest<any>(monster.url);

      pokemon.value = [...pokemon.value, pokemonDetails];

      return { ...pokemonDetails };
    });

    loading.value = false;
  };

  onMounted(() => {
    fetchPokemon();
  });

  return {
    pokemon,
    loading,
  };
};
