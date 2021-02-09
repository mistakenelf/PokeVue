interface Sprites {
  front_default: string;
  back_default: string;
}

interface Stats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
}

export interface PokemonDetails {
  id: string;
  name: string;
  url: string;
  order: number;
  sprites: Sprites;
  stats: Stats[];
}

export interface Pokemon {
  count: number;
  next?: string;
  previous?: string;
  results: PokemonDetails[];
}
