import {Reducer} from 'redux';

interface PokemonReducer {
  favorites: Pokemon[];
  pokemons: Pokemon[];
  page: number;
  loading: boolean;
}

const initState: PokemonReducer = {
  favorites: [],
  pokemons: [],
  page: 0,
  loading: true,
};

export const pokemonReducer: Reducer<PokemonReducer> = (
  state = initState,
  action,
): PokemonReducer => {
  switch (action.type) {
    case 'FETCH_POKEMON': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'FETCH_POKEMON_SUCCESS': {
      return {
        ...state,
        pokemons: action.payload.pokemons,
        page: action.payload.page,
        loading: false,
      };
    }
    case 'UPDATE_FAVORITES_SUCCESS': {
      return {
        ...state,
        favorites: action.payload.favorites,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
