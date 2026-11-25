import { useEffect } from 'react';
import type { MouseEvent } from 'react';
import type { Pokemon } from '../types/pokemon';
import { estilosTipos, formatearNumero, capitalizar } from '../utils/tipos';
import {
  formatearAltura,
  formatearPeso,
  nombresEstadisticas,
  ordenEstadisticas,
  ESTADISTICA_MAXIMA,
} from '../utils/formato';

interface PokemonDetailModalProps {
  pokemon: Pokemon;
  onCerrar: () => void; // avisa a App que hay que cerrar el modal
}

export function PokemonDetailModal({ pokemon, onCerrar }: PokemonDetailModalProps) {
  // Cerrar el modal con la tecla Escape
  useEffect(() => {
    function handleTecla(evento: KeyboardEvent): void {
      if (evento.key === 'Escape') {
        onCerrar();
      }
    }
    window.addEventListener('keydown', handleTecla);
    // Limpieza: cuando el modal se cierra, dejamos de escuchar el teclado
    return () => window.removeEventListener('keydown', handleTecla);
  }, [onCerrar]);

  // Un clic DENTRO del contenido no debe llegar al fondo (que cierra el modal)
  function handleClickContenido(evento: MouseEvent<HTMLDivElement>): void {
    evento.stopPropagation();
  }

  // Color principal = color del primer tipo
  const colorPrincipal = estilosTipos[pokemon.tipos[0]].fondo;

  // Suma de todas las estadísticas
  const total = ordenEstadisticas.reduce(
    (suma, clave) => suma + pokemon.estadisticas[clave],
    0
  );

  return (
    <div className="modal-fondo" onClick={onCerrar}>
      <div
        className="modal-contenido"
        onClick={handleClickContenido}
        role="dialog"
        aria-modal="true"
        aria-label={`Detalle de ${capitalizar(pokemon.nombre)}`}
      >
        <button className="modal-cerrar" onClick={onCerrar} aria-label="Cerrar">
          ✕
        </button>

        {/* Parte superior con el color del tipo */}
        <div className="modal-cabecera" style={{ backgroundColor: colorPrincipal }}>
          <img src={pokemon.imagen} alt={pokemon.nombre} />
        </div>

        <div className="modal-cuerpo">
          <span className="pokemon-numero-modal">{formatearNumero(pokemon.id)}</span>
          <h2>{capitalizar(pokemon.nombre)}</h2>

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

          {/* Altura y peso */}
          <div className="modal-medidas">
            <div>
              <span className="medida-valor">{formatearAltura(pokemon.altura)}</span>
              <span className="medida-nombre">Altura</span>
            </div>
            <div>
              <span className="medida-valor">{formatearPeso(pokemon.peso)}</span>
              <span className="medida-nombre">Peso</span>
            </div>
          </div>

          {/* Estadísticas con barras */}
          <h3>Estadísticas base</h3>
          <ul className="estadisticas">
            {ordenEstadisticas.map((clave) => {
              const valor = pokemon.estadisticas[clave];
              const porcentaje = (valor / ESTADISTICA_MAXIMA) * 100;
              return (
                <li key={clave}>
                  <span className="estadistica-nombre">{nombresEstadisticas[clave]}</span>
                  <span className="estadistica-valor">{valor}</span>
                  <div className="barra">
                    <div
                      className="barra-relleno"
                      style={{ width: `${porcentaje}%`, backgroundColor: colorPrincipal }}
                    />
                  </div>
                </li>
              );
            })}
            <li className="estadistica-total">
              <span className="estadistica-nombre">Total</span>
              <span className="estadistica-valor">{total}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}