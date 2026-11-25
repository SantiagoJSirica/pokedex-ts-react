import { useState } from 'react';
import './App.css';
import type { Pokemon } from './types/pokemon';
import { pokemonsMock } from './data/mockData';
import { PokemonList } from './components/PokemonList';

function App() {
  // Estado con la lista completa de pokémon (por ahora, los datos locales)
  const [pokemons] = useState<Pokemon[]>(pokemonsMock);

  return (
    <div className="app">
      <h1>Pokédex</h1>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;