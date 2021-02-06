interface PokemonListResults {
  name: string;
  url: string;
}

export interface PokemonList {
  count: number;
  next?: string;
  previous?: string;
  results: PokemonListResults[];
}

export interface PokemonDetails {
  name: string;
  url: string;
  order: number;
}
