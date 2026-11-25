import type { MouseEvent } from 'react';
import type { Pokemon } from '../types/pokemon';
import { estilosTipos, formatearNumero, capitalizar } from '../utils/tipos';

interface PokemonCardProps {
  pokemon: Pokemon;
  esFavorito: boolean;                          // ¿está marcado como favorito?
  onToggleFavorito: (id: number) => void;       // avisa a App que se tocó el corazón
  onSeleccionar: (pokemon: Pokemon) => void;    // avisa a App que se tocó la tarjeta
}

export function PokemonCard({
  pokemon,
  esFavorito,
  onToggleFavorito,
  onSeleccionar,
}: PokemonCardProps) {
  function handleClickTarjeta(): void {
    onSeleccionar(pokemon);
  }

  function handleClickFavorito(evento: MouseEvent<HTMLButtonElement>): void {
    // Evita que el clic en el corazón "suba" a la tarjeta y abra el modal
    evento.stopPropagation();
    onToggleFavorito(pokemon.id);
  }

  return (
    <article className="pokemon-card" onClick={handleClickTarjeta}>
      <span className="pokemon-numero">{formatearNumero(pokemon.id)}</span>

      <button
        className={esFavorito ? 'boton-favorito activo' : 'boton-favorito'}
        onClick={handleClickFavorito}
        aria-label={esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        aria-pressed={esFavorito}
      >
        {esFavorito ? '❤️' : '🤍'}
      </button>

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