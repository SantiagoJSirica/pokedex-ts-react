import type { Estadisticas } from '../types/pokemon';

// Muestra un número con 1 decimal y coma, como se usa en Argentina: 1.7 → "1,7"
function conUnDecimal(valor: number): string {
  return valor.toLocaleString('es-AR', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}

// La PokéAPI da la altura en decímetros: 17 → "1,7 m"
export function formatearAltura(decimetros: number): string {
  return `${conUnDecimal(decimetros / 10)} m`;
}

// La PokéAPI da el peso en hectogramos: 905 → "90,5 kg"
export function formatearPeso(hectogramos: number): string {
  return `${conUnDecimal(hectogramos / 10)} kg`;
}

// Nombre visible de cada estadística
export const nombresEstadisticas: Record<keyof Estadisticas, string> = {
  hp: 'PS',
  ataque: 'Ataque',
  defensa: 'Defensa',
  ataqueEspecial: 'Atq. Especial',
  defensaEspecial: 'Def. Especial',
  velocidad: 'Velocidad',
};

// Orden en el que se muestran las barras
export const ordenEstadisticas: (keyof Estadisticas)[] = [
  'hp',
  'ataque',
  'defensa',
  'ataqueEspecial',
  'defensaEspecial',
  'velocidad',
];

// Valor máximo posible de una estadística base (sirve para calcular el largo de la barra)
export const ESTADISTICA_MAXIMA = 255;