// src/types/pokemon.ts

// Los 18 tipos de pokémon. Uso los nombres en inglés porque son
// exactamente los que devuelve la PokéAPI (así no hay que traducir después).
export type TipoPokemon =
  | 'normal'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'ice'
  | 'fighting'
  | 'poison'
  | 'ground'
  | 'flying'
  | 'psychic'
  | 'bug'
  | 'rock'
  | 'ghost'
  | 'dragon'
  | 'dark'
  | 'steel'
  | 'fairy';

// Las 6 estadísticas base que tiene cada pokémon en la PokéAPI
export interface Estadisticas {
  hp: number;
  ataque: number;
  defensa: number;
  ataqueEspecial: number;
  defensaEspecial: number;
  velocidad: number;
}

// El modelo principal de la app
export interface Pokemon {
  id: number;
  nombre: string;
  tipos: TipoPokemon[];   // 1 o 2 tipos (ej: ['grass', 'poison'])
  imagen: string;         // URL de la imagen
  altura: number;         // en decímetros (17 = 1,7 m), igual que la PokéAPI
  peso: number;           // en hectogramos (905 = 90,5 kg), igual que la PokéAPI
  estadisticas: Estadisticas;
}

// Opciones del filtro por tipo: un tipo concreto o "todos"
export type FiltroTipo = TipoPokemon | 'todos';