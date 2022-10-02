import pokeapi from '../services/pokeapi';
import {getIsFavorite} from './selectors';

const LIMIT_POKEMON_REQUEST = 10;

const mappResponseToPokemon = (pokemon: PokemonResponse): Pokemon => ({
  id: pokemon.id,
  name: pokemon.name,
  abilities: pokemon.abilities,
  height: pokemon.height,
  base_experience: pokemon.base_experience,
  sprites: pokemon.sprites,
  types: pokemon.types,
  weight: pokemon.weight,
});

export const fetchPokemons: Action = async (dispatch, getState) => {
  try {
    dispatch({type: 'FETCH_POKEMON'});
    const {pokemonReducer} = getState();
    const pageResponse = await pokeapi.getPage(
      LIMIT_POKEMON_REQUEST,
      pokemonReducer.page * LIMIT_POKEMON_REQUEST,
    );

    const detailResponses = await Promise.all(
      pageResponse.results.map(pokemon => {
        const id: number = +/[^/]+(?=\/$|$)/.exec(pokemon.url)![0];
        return pokeapi.getById(id);
      }),
    );

    dispatch({
      type: 'FETCH_POKEMON_SUCCESS',
      payload: {
        pokemons: [
          ...pokemonReducer.pokemons,
          ...detailResponses.map(mappResponseToPokemon),
        ],
        page: pokemonReducer.page + 1,
      },
    });
  } catch (error) {
    dispatch({type: 'FETCH_POKEMON_FAIL'});
  }
};

const addToFavorites = (
  id: Pokemon['id'],
  list: Pokemon[],
  favorites: Pokemon[],
): Pokemon[] => {
  const pokemon = list.find(pkm => pkm.id === id);
  if (!pokemon) {
    return [...favorites];
  }
  return [pokemon, ...favorites];
};

const removeFromFavorites = (id: Pokemon['id'], list: Pokemon[]) => {
  const pokemonList = [...list];
  const pokemonIndex = pokemonList.findIndex(pkm => pkm.id === id);
  pokemonList.splice(pokemonIndex, 1);
  return [...pokemonList];
};

export const toggleFavorite =
  (id: Pokemon['id']): Action =>
  async (dispatch, getState) => {
    try {
      dispatch({type: 'UPDATE_FAVORITES'});
      const state = getState();
      const {pokemons, favorites} = state.pokemonReducer;
      const isFavorite = getIsFavorite(id)(state);
      const newFavorites = isFavorite
        ? removeFromFavorites(id, favorites)
        : addToFavorites(id, pokemons, favorites);
      dispatch({
        type: 'UPDATE_FAVORITES_SUCCESS',
        payload: {favorites: [...newFavorites]},
      });
    } catch (error) {
      dispatch({type: 'UPDATE_FAVORITES_FAIL'});
    }
  };

export const fetchPokemonById = () => {};
