import * as React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Pressable} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SharedElement} from 'react-navigation-shared-element';
import {useSelector} from 'react-redux';
import {Card, PokeCard, Text} from '../components';
import {useAppDispatch} from '../redux';
import {fetchPokemons} from '../redux/actions';
import {getFavorites, getPokemons} from '../redux/selectors';

type RootStackParamList = {
  Home: {};
  Focus: {pokemon: Pokemon};
};

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home', 'MyStack'>;

const Home = (props: HomeProps) => {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const pokemons = useSelector(getPokemons);
  const favorites = useSelector(getFavorites);

  React.useEffect(() => {
    dispatch(fetchPokemons);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = favorites.length
    ? ['Favorites', ...favorites, 'All', ...pokemons]
    : pokemons;

  const stickyHeader = favorites.length ? [0, favorites.length + 1] : undefined;

  return (
    <FlatList<Pokemon | string>
      stickyHeaderIndices={stickyHeader}
      onEndReachedThreshold={0.1}
      onEndReached={() => dispatch(fetchPokemons)}
      data={data}
      renderItem={({item: pokemon}) =>
        typeof pokemon === 'string' ? (
          <Card>
            <Text class="MUTED">{pokemon}</Text>
          </Card>
        ) : (
          <Pressable
            onPress={() => navigation.push('Focus', {pokemon})}
            key={`pokemon.${pokemon.id}`}>
            <SharedElement id={`pokemon.${pokemon.id}`}>
              <PokeCard
                key={pokemon.id}
                id={pokemon.id}
                size="M"
                image={{
                  uri: pokemon.sprites.front_default,
                }}
                name={pokemon.name}
                type={pokemon.types[0].type.name}
              />
            </SharedElement>
          </Pressable>
        )
      }
      keyExtractor={(item: Pokemon | string) =>
        typeof item === 'string' ? item : item.name
      }
    />
  );
};

export default Home;
