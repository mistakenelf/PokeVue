interface PokemonListResults {
  name: string;
  url: string;
}

export interface PokemonList {
  results: PokemonListResults[];
}

export interface PokemonDetails {
  name: string;
  url: string;
  order: number;
}
