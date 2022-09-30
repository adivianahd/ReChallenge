import {Reducer} from 'redux';

interface PokemonReducer {
  pokemons: Pokemon[];
  page: number;
}

const initState: PokemonReducer = {
  pokemons: [],
  page: 0,
};

export const pokemonReducer: Reducer<PokemonReducer> = (
  state = initState,
  action,
): PokemonReducer => {
  switch (action.type) {
    case 'FETCH_POKEMON': {
      return {...state};
    }
    case 'FETCH_POKEMON_SUCCESS': {
      return {
        ...state,
        pokemons: action.payload.pokemons,
        page: action.payload.page,
      };
    }

    default: {
      return state;
    }
  }
};
