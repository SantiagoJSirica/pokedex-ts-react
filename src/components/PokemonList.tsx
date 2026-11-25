import type { Pokemon } from '../types/pokemon';
import { PokemonCard } from './PokemonCard';

interface PokemonListProps {
  pokemons: Pokemon[];
  favoritos: number[];                         // ids de los pokémon favoritos
  onToggleFavorito: (id: number) => void;      // se lo pasa a cada tarjeta
  onSeleccionar: (pokemon: Pokemon) => void;   // se lo pasa a cada tarjeta
}

export function PokemonList({
  pokemons,
  favoritos,
  onToggleFavorito,
  onSeleccionar,
}: PokemonListProps) {
  // Si no hay pokémon para mostrar (por ejemplo, cuando un filtro no encuentra nada)
  if (pokemons.length === 0) {
    return <p className="lista-vacia">No se encontraron pokémon.</p>;
  }

  return (
    <section className="pokemon-grid">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          esFavorito={favoritos.includes(pokemon.id)}
          onToggleFavorito={onToggleFavorito}
          onSeleccionar={onSeleccionar}
        />
      ))}
    </section>
  );
}