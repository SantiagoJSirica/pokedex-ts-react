import { useState } from 'react';
import './App.css';
import type { Pokemon, FiltroTipo } from './types/pokemon';
import { pokemonsMock } from './data/mockData';
import { PokemonList } from './components/PokemonList';
import { SearchBar } from './components/SearchBar';
import { TypeFilter } from './components/TypeFilter';

function App() {
  // Estado con la lista completa de pokémon (por ahora, los datos locales)
  const [pokemons] = useState<Pokemon[]>(pokemonsMock);

  // Filtro 1: texto del buscador
  const [busqueda, setBusqueda] = useState<string>('');

  // Filtro 2: tipo seleccionado
  const [tipoSeleccionado, setTipoSeleccionado] = useState<FiltroTipo>('todos');

  function handleBuscar(texto: string): void {
    setBusqueda(texto);
  }

  function handleCambiarTipo(tipo: FiltroTipo): void {
    setTipoSeleccionado(tipo);
  }

  // Lista filtrada: un pokémon se muestra solo si cumple LOS DOS filtros
  const textoNormalizado = busqueda.trim().toLowerCase();
  const pokemonsFiltrados = pokemons.filter((pokemon) => {
    const coincideNombre = pokemon.nombre.toLowerCase().includes(textoNormalizado);
    const coincideTipo =
      tipoSeleccionado === 'todos' || pokemon.tipos.includes(tipoSeleccionado);
    return coincideNombre && coincideTipo;
  });

  return (
    <div className="app">
      <h1>Pokédex</h1>

      <div className="filtros">
        <SearchBar valor={busqueda} onBuscar={handleBuscar} />
        <TypeFilter valor={tipoSeleccionado} onCambiarTipo={handleCambiarTipo} />
      </div>

      <PokemonList pokemons={pokemonsFiltrados} />
    </div>
  );
}

export default App;