export const getPokemons = ({
  pokemonReducer: {pokemons},
}: RootState): Pokemon[] => pokemons;

export const getFavorites = ({
  pokemonReducer: {favorites},
}: RootState): Pokemon[] => favorites;

export const getIsFavorite =
  (id: Pokemon['id']) =>
  ({pokemonReducer: {favorites}}: RootState): Boolean =>
    favorites.findIndex((pokemon: Pokemon) => pokemon.id === id) !== -1;
