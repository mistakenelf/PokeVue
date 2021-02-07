import { getRequest } from '../helpers/fetch';
import { PokemonList, PokemonDetails } from '../../models/Pokemon';

const getPokemonDetails = async (url: string) => {
  const res = await getRequest<PokemonDetails>(url);

  return res;
};

export const getPokemonList = async (
  url = 'https://pokeapi.co/api/v2/pokemon?limit=20',
) => {
  const res = await getRequest<PokemonList>(url);
  const pokemonPromises = res.results.map((p) => getPokemonDetails(p.url));
  const pokemonDetails = await Promise.all(pokemonPromises);

  return {
    count: res.count,
    next: res.next,
    previous: res.previous,
    pokemon: [...pokemonDetails],
  };
};
