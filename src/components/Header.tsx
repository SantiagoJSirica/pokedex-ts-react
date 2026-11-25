interface HeaderProps {
  cantidadFavoritos: number;
}

export function Header({ cantidadFavoritos }: HeaderProps) {
  // Texto según la cantidad: 0, 1 o varios favoritos
  function textoFavoritos(cantidad: number): string {
    if (cantidad === 0) return 'Todavía no tenés favoritos';
    if (cantidad === 1) return '1 favorito';
    return `${cantidad} favoritos`;
  }

  return (
    <header className="header">
      <h1>Pokédex</h1>
      <p className="header-favoritos">❤️ {textoFavoritos(cantidadFavoritos)}</p>
    </header>
  );
}