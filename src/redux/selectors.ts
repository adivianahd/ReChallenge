export const getPokemons = ({
  pokemonReducer: {pokemons, favorites},
}: RootState): Pokemon[] =>
  pokemons.filter(
    pokemon => !favorites.find(fpokemon => fpokemon.id === pokemon.id),
  );

export const getFavorites = ({
  pokemonReducer: {favorites},
}: RootState): Pokemon[] => favorites;

export const getIsFavorite =
  (id: Pokemon['id']) =>
  ({pokemonReducer: {favorites}}: RootState): Boolean =>
    favorites.findIndex((pokemon: Pokemon) => pokemon.id === id) !== -1;
