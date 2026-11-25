import type { Pokemon } from '../types/pokemon';
import { PokemonCard } from './PokemonCard';

interface PokemonListProps {
  pokemons: Pokemon[];
}

export function PokemonList({ pokemons }: PokemonListProps) {
  // Si no hay pokémon para mostrar (por ejemplo, cuando un filtro no encuentra nada)
  if (pokemons.length === 0) {
    return <p className="lista-vacia">No se encontraron pokémon.</p>;
  }

  return (
    <section className="pokemon-grid">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </section>
  );
}