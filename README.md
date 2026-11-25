# Pokédex — React + TypeScript

Aplicación web que funciona como una **Pokédex**: un catálogo de Pokémon donde se pueden buscar, filtrar y consultar en detalle los datos y las estadísticas de cada uno.

Está hecha con **React**, **TypeScript** y **Vite**. En esta primera fase funciona con **datos locales** (*mock data*) y está preparada para conectarse más adelante a la [PokéAPI](https://pokeapi.co/), de donde se obtienen todos los datos.

---

## Funcionalidades

- **Catálogo en grilla**: cada Pokémon se muestra en una tarjeta con su número (`#006`), imagen oficial, nombre y tipos.
- **Etiquetas de tipo con colores**: cada tipo tiene su color (Fuego rojo, Planta verde, Agua celeste, Veneno violeta, Hada rosa, etc.) para identificarlos de un vistazo.
- **Búsqueda por nombre en tiempo real**: los resultados se filtran mientras escribís, sin importar mayúsculas ni espacios.
- **Filtro por tipo**: permite ver solo los Pokémon de un tipo (o "Todos los tipos"). Incluye a los que tienen ese tipo como segundo tipo.
- **Filtros combinados**: la búsqueda y el filtro por tipo funcionan juntos. Por ejemplo, "char" + Fuego muestra solo a Charizard.
- **Favoritos**: con el botón ❤️ de cada tarjeta se marcan y desmarcan favoritos. El encabezado muestra cuántos hay.
- **Detalle de cada Pokémon**: al hacer clic en una tarjeta se abre una ventana con toda su información. Se cierra con la ✕, haciendo clic afuera o con la tecla Escape.
- **Diseño responsive**: la grilla pasa de 4 a 3, 2 o 1 columna según el tamaño de la pantalla.

---

## Información de cada Pokémon

La vista de detalle reúne en un solo lugar:

| Dato | Ejemplo (Charizard) |
|---|---|
| Número de Pokédex | #006 |
| Tipos | Fuego / Volador |
| Altura | 1,7 m |
| Peso | 90,5 kg |
| PS (puntos de salud) | 78 |
| Ataque | 84 |
| Defensa | 78 |
| Ataque especial | 109 |
| Defensa especial | 85 |
| Velocidad | 100 |
| Total de estadísticas | 534 |

Cada estadística se muestra con su **número** y una **barra** proporcional al máximo posible (255), lo que permite comparar Pokémon rápidamente.

---

## Utilidad para la estrategia de combate

La cantidad de información que se puede consultar hace que la Pokédex sea una herramienta útil para **planificar combates y armar equipos**:

- **Tipos**: conocer los tipos de un Pokémon permite anticipar qué ataques le convienen y cuáles debe evitar. Con el filtro por tipo se encuentran rápido opciones para cubrir un tipo rival.
- **Velocidad**: indica quién suele atacar primero en un turno.
- **Ataque vs. Ataque especial**: muestra si un Pokémon es mejor con ataques físicos o especiales. Por ejemplo, Alakazam tiene 135 de Ataque especial y solo 50 de Ataque.
- **Defensa vs. Defensa especial**: ayuda a decidir qué tipo de ataque usar contra cada rival. Steelix, por ejemplo, tiene 200 de Defensa pero 65 de Defensa especial.
- **PS y total de estadísticas**: dan una idea general de la resistencia y la fuerza de cada Pokémon.
- **Favoritos**: sirven para marcar a los candidatos para el equipo y tenerlos identificados.

---

## Tecnologías

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/) (tipado estricto, sin `any`)
- [Vite](https://vite.dev/)
- CSS puro (sin librerías de estilos)

---

## Estructura del proyecto

```
src/
├── components/
│   ├── Header.tsx              → título y cantidad de favoritos
│   ├── SearchBar.tsx           → búsqueda por nombre
│   ├── TypeFilter.tsx          → filtro por tipo
│   ├── PokemonList.tsx         → grilla de tarjetas
│   ├── PokemonCard.tsx         → tarjeta de cada Pokémon
│   └── PokemonDetailModal.tsx  → detalle con estadísticas
├── data/
│   └── mockData.ts             → datos locales de 15 Pokémon
├── types/
│   └── pokemon.ts              → interfaces y tipos
├── utils/
│   ├── tipos.ts                → colores, nombres de tipos y funciones auxiliares
│   └── formato.ts              → formato de altura, peso y estadísticas
├── App.tsx                     → componente principal y estados
├── App.css                     → estilos de la aplicación
├── index.css                   → estilos globales y fondo
└── main.tsx                    → punto de entrada
```

---

## Cómo correr el proyecto localmente

### Requisitos

- [Node.js](https://nodejs.org/) (versión LTS recomendada)
- [Git](https://git-scm.com/)

### Pasos

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/SantiagoJSirica/pokedex-ts-react.git
   ```

2. Entrar a la carpeta del proyecto:

   ```bash
   cd pokedex-ts-react
   ```

3. Instalar las dependencias (crea la carpeta `node_modules`):

   ```bash
   npm install
   ```

4. Iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abrir en el navegador la dirección que aparece en la terminal (normalmente `http://localhost:5173`).

### Otros comandos

| Comando | Qué hace |
|---|---|
| `npm run build` | Genera la versión de producción en la carpeta `dist/` |
| `npm run preview` | Muestra localmente la versión de producción |

---

## Datos

En esta fase la aplicación usa datos locales de **15 Pokémon** (`src/data/mockData.ts`): Venusaur, Charizard, Blastoise, Pikachu, Sandslash, Alakazam, Machamp, Gengar, Dragonite, Crobat, Umbreon, Steelix, Tyranitar, Togekiss y Mamoswine.

Los datos (tipos, altura, peso y estadísticas) son reales y fueron tomados de la [PokéAPI](https://pokeapi.co/). Las imágenes son el *official artwork* del repositorio de sprites de la PokéAPI.

---

## Próximos pasos

- Conectar la aplicación a la PokéAPI para obtener los datos en tiempo real.
- Ampliar el catálogo a más Pokémon.
- Agregar nuevas funcionalidades.

---

*Pokémon y sus nombres son marcas registradas de Nintendo, Game Freak y The Pokémon Company. Este es un proyecto educativo sin fines comerciales.*

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
