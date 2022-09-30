import pokeapi from '../services/pokeapi';

const LIMIT_POKEMON_REQUEST = 10;

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
        const id: number = +/[^\/]+(?=\/$|$)/.exec(pokemon.url)![0];
        return pokeapi.getById(id);
      }),
    );

    dispatch({
      type: 'FETCH_POKEMON_SUCCESS',
      payload: {
        pokemons: [...pokemonReducer.pokemons, ...detailResponses],
        page: pokemonReducer.page + 1,
      },
    });
  } catch (error) {
    dispatch({type: 'FETCH_POKEMON_FAIL'});
  }
};

export const fetchPokemonById = () => {};
