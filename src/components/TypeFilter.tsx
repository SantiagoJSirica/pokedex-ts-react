import type { ChangeEvent } from 'react';
import type { FiltroTipo } from '../types/pokemon';
import { estilosTipos, listaTipos, esFiltroTipo } from '../utils/tipos';

interface TypeFilterProps {
  valor: FiltroTipo;                            // el tipo elegido (viene del estado de App)
  onCambiarTipo: (tipo: FiltroTipo) => void;    // callback para avisarle a App
}

export function TypeFilter({ valor, onCambiarTipo }: TypeFilterProps) {
  function handleChange(evento: ChangeEvent<HTMLSelectElement>): void {
    const valorElegido = evento.target.value; // siempre llega como string
    // Comprobamos que sea un FiltroTipo válido antes de avisar
    if (esFiltroTipo(valorElegido)) {
      onCambiarTipo(valorElegido);
    }
  }

  return (
    <select className="type-filter" value={valor} onChange={handleChange}>
      <option value="todos">Todos los tipos</option>
      {listaTipos.map((tipo) => (
        <option key={tipo} value={tipo}>
          {estilosTipos[tipo].nombre}
        </option>
      ))}
    </select>
  );
}