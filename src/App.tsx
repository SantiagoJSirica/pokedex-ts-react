import { useState } from 'react';
import './App.css';
import type { Pokemon } from './types/pokemon';
import { pokemonsMock } from './data/mockData';
import { PokemonList } from './components/PokemonList';
import { SearchBar } from './components/SearchBar';

function App() {
  // Estado con la lista completa de pokémon (por ahora, los datos locales)
  const [pokemons] = useState<Pokemon[]>(pokemonsMock);

  // Estado con el texto del buscador
  const [busqueda, setBusqueda] = useState<string>('');

  // Callback que recibe SearchBar: actualiza el estado con el texto nuevo
  function handleBuscar(texto: string): void {
    setBusqueda(texto);
  }

  // Lista filtrada: se recalcula sola en cada render a partir de los estados
  const textoNormalizado = busqueda.trim().toLowerCase();
  const pokemonsFiltrados = pokemons.filter((pokemon) =>
    pokemon.nombre.toLowerCase().includes(textoNormalizado)
  );

  return (
    <div className="app">
      <h1>Pokédex</h1>
      <SearchBar valor={busqueda} onBuscar={handleBuscar} />
      <PokemonList pokemons={pokemonsFiltrados} />
    </div>
  );
}

export default App;