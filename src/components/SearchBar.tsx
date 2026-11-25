import type { ChangeEvent } from 'react';

interface SearchBarProps {
  valor: string;                       // el texto actual (viene del estado de App)
  onBuscar: (texto: string) => void;   // callback para avisarle a App que cambió
}

export function SearchBar({ valor, onBuscar }: SearchBarProps) {
  // Se ejecuta cada vez que el usuario escribe o borra una letra
  function handleChange(evento: ChangeEvent<HTMLInputElement>): void {
    onBuscar(evento.target.value);
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar pokémon por nombre..."
        value={valor}
        onChange={handleChange}
      />
    </div>
  );
}