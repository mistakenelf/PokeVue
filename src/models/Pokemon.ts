interface PokemonListResults {
  name: string;
  url: string;
}

interface Sprites {
  front_default: string;
  back_default: string;
}

export interface PokemonList {
  count: number;
  next?: string;
  previous?: string;
  results: PokemonListResults[];
}

export interface PokemonDetails {
  id: string;
  name: string;
  url: string;
  order: number;
  sprites: Sprites;
}

export interface Pokemon {
  count: number;
  next?: string;
  previous?: string;
  pokemon: PokemonDetails[];
}
