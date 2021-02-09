import { getRequest } from '../helpers/fetch';
import { PokemonDetails } from '../../models/Pokemon';

const getPokemonDetails = async (url: string) => {
  const res = await getRequest<PokemonDetails>(url);

  return res;
};

interface PokemonListResults {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next?: string;
  previous?: string;
  results: PokemonListResults[];
}

const getPokemon = async (
  url = 'https://pokeapi.co/api/v2/pokemon?limit=20',
) => {
  const res = await getRequest<PokemonListResponse>(url);
  const pokemonPromises = res.results.map((p) => getPokemonDetails(p.url));
  const pokemonDetails = await Promise.all(pokemonPromises);

  return {
    count: res.count,
    next: res.next,
    previous: res.previous,
    results: [...pokemonDetails],
  };
};

export default {
  getPokemon,
};
