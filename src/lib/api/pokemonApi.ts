import { getRequest } from '../helpers/fetch';
import { PokemonList, PokemonDetails } from '../../models/Pokemon';

export const getPokemon = (
  url = 'https://pokeapi.co/api/v2/pokemon?limit=20',
) => {
  return getRequest<PokemonList>(url);
};

export const getPokemonDetails = (url: string) => {
  return getRequest<PokemonDetails>(url);
};
