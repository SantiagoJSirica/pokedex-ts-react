import type { Pokemon } from '../types/pokemon';
import { estilosTipos, formatearNumero, capitalizar } from '../utils/tipos';

interface PokemonCardProps {
  pokemon: Pokemon;
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <article className="pokemon-card">
      <span className="pokemon-numero">{formatearNumero(pokemon.id)}</span>

      <img
        className="pokemon-imagen"
        src={pokemon.imagen}
        alt={pokemon.nombre}
        loading="lazy"
      />

      <h3 className="pokemon-nombre">{capitalizar(pokemon.nombre)}</h3>

      <div className="pokemon-tipos">
        {pokemon.tipos.map((tipo) => (
          <span
            key={tipo}
            className="tipo-etiqueta"
            style={{
              backgroundColor: estilosTipos[tipo].fondo,
              color: estilosTipos[tipo].texto,
            }}
          >
            {estilosTipos[tipo].nombre}
          </span>
        ))}
      </div>
    </article>
  );
}