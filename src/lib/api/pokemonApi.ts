import { getRequest } from '../helpers/fetch';
import { PokemonList, PokemonDetails } from '../../models/Pokemon';

export const getPokemon = () => {
  return getRequest<PokemonList>('https://pokeapi.co/api/v2/pokemon?limit=20');
};

export const getPokemonDetails = (url: string) => {
  return getRequest<PokemonDetails>(url);
};
