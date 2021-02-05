<script lang="ts">
import axios from 'axios';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    const pokemon = ref<any>([]);
    const loading = ref(true);

    const fetchPokemon = async () => {
      loading.value = true;

      const res: any = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=20',
      );

      res.data.results.map(async (monster: { name: string; url: string }) => {
        const pokemonDetails = await axios.get(monster.url);

        pokemon.value = [...pokemon.value, pokemonDetails.data];

        return { ...pokemonDetails };
      });

      loading.value = false;
    };

    onMounted(() => {
      fetchPokemon();
    });

    return {
      pokemon,
    };
  },
});
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  grid-gap: 10px;
  margin: 10px;
}
.pokemon-card {
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 8px solid #3c5aa6;
  border-radius: 5px;
}
.pokemon-name {
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  color: #333;
}
</style>

<template>
  <div v-if="pokemon.length > 0 && !loading" class="container">
    <div v-for="p in pokemon" :key="p.id">
      <div class="pokemon-card">
        <div class="pokemon-name">{{ p.name }}</div>
        <img :src="p.sprites.front_default" height="300" width="300" />
      </div>
    </div>
  </div>
  <div v-else>No pokemon found</div>
</template>
