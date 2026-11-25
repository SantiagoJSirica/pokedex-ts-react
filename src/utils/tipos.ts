
import type { TipoPokemon, FiltroTipo } from '../types/pokemon';

// Cómo se muestra cada tipo: nombre en español, color de fondo y color del texto
interface EstiloTipo {
  nombre: string;
  fondo: string;
  texto: string;
}

// Record<TipoPokemon, EstiloTipo> obliga a definir los 18 tipos (si falta uno, da error)
export const estilosTipos: Record<TipoPokemon, EstiloTipo> = {
  fire:     { nombre: 'Fuego',     fondo: '#e53935', texto: '#ffffff' },
  grass:    { nombre: 'Planta',    fondo: '#43a047', texto: '#ffffff' },
  poison:   { nombre: 'Veneno',    fondo: '#8e24aa', texto: '#ffffff' },
  ghost:    { nombre: 'Fantasma',  fondo: '#5e35b1', texto: '#ffffff' },
  water:    { nombre: 'Agua',      fondo: '#29b6f6', texto: '#ffffff' },
  ice:      { nombre: 'Hielo',     fondo: '#81d4fa', texto: '#1a1a1a' },
  fairy:    { nombre: 'Hada',      fondo: '#f48fb1', texto: '#1a1a1a' },
  psychic:  { nombre: 'Psíquico',  fondo: '#ec407a', texto: '#ffffff' },
  electric: { nombre: 'Eléctrico', fondo: '#fdd835', texto: '#1a1a1a' },
  fighting: { nombre: 'Lucha',     fondo: '#bf360c', texto: '#ffffff' },
  ground:   { nombre: 'Tierra',    fondo: '#c49a5a', texto: '#1a1a1a' },
  rock:     { nombre: 'Roca',      fondo: '#8d6e63', texto: '#ffffff' },
  flying:   { nombre: 'Volador',   fondo: '#90a4ec', texto: '#1a1a1a' },
  dragon:   { nombre: 'Dragón',    fondo: '#3949ab', texto: '#ffffff' },
  dark:     { nombre: 'Siniestro', fondo: '#424242', texto: '#ffffff' },
  steel:    { nombre: 'Acero',     fondo: '#90a4ae', texto: '#1a1a1a' },
  bug:      { nombre: 'Bicho',     fondo: '#9ccc65', texto: '#1a1a1a' },
  normal:   { nombre: 'Normal',    fondo: '#bdbdbd', texto: '#1a1a1a' },
};

// 25 → "#025"
export function formatearNumero(id: number): string {
  return '#' + id.toString().padStart(3, '0');
}

// "charizard" → "Charizard"
export function capitalizar(texto: string): string {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

// ----- Type guards: comprueban si un string es un tipo válido -----

// ¿Este texto es uno de los 18 tipos de pokémon?
export function esTipoPokemon(valor: string): valor is TipoPokemon {
  return valor in estilosTipos;
}

// ¿Este texto es una opción válida del filtro (un tipo o "todos")?
export function esFiltroTipo(valor: string): valor is FiltroTipo {
  return valor === 'todos' || esTipoPokemon(valor);
}

// Los 18 tipos, ordenados alfabéticamente por su nombre en español
export const listaTipos: TipoPokemon[] = Object.keys(estilosTipos)
  .filter(esTipoPokemon)
  .sort((a, b) => estilosTipos[a].nombre.localeCompare(estilosTipos[b].nombre));