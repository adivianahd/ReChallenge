import {Reducer} from 'redux';

interface PokemonReducer {
  favorites: Pokemon[];
  pokemons: Pokemon[];
  page: number;
}

const initState: PokemonReducer = {
  favorites: [],
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
    case 'UPDATE_FAVORITES_SUCCESS': {
      return {
        ...state,
        favorites: action.payload.favorites,
      };
    }
    default: {
      return state;
    }
  }
};
