import { useState } from 'react';
import './App.css';
import type { Pokemon, FiltroTipo } from './types/pokemon';
import { pokemonsMock } from './data/mockData';
import { Header } from './components/Header';
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

  // Interacción: ids de los pokémon marcados como favoritos
  const [favoritos, setFavoritos] = useState<number[]>([]);

  function handleBuscar(texto: string): void {
    setBusqueda(texto);
  }

  function handleCambiarTipo(tipo: FiltroTipo): void {
    setTipoSeleccionado(tipo);
  }

  // Si el id ya está, lo saca; si no está, lo agrega
  function handleToggleFavorito(id: number): void {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter((favId) => favId !== id));
    } else {
      setFavoritos([...favoritos, id]);
    }
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
      <Header cantidadFavoritos={favoritos.length} />

      <div className="filtros">
        <SearchBar valor={busqueda} onBuscar={handleBuscar} />
        <TypeFilter valor={tipoSeleccionado} onCambiarTipo={handleCambiarTipo} />
      </div>

      <PokemonList
        pokemons={pokemonsFiltrados}
        favoritos={favoritos}
        onToggleFavorito={handleToggleFavorito}
      />
    </div>
  );
}

export default App;