import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {Pressable, SafeAreaView, StatusBar} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SharedElement} from 'react-navigation-shared-element';
import {useSelector} from 'react-redux';
import {PokeCard} from '../components';
import {useAppDispatch} from '../redux';
import {fetchPokemons} from '../redux/actions';

type RootStackParamList = {
  Home: {};
  Focus: {pokemon: Pokemon};
};

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home', 'MyStack'>;

const Home = (props: HomeProps) => {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const pokemons = useSelector(
    (state: RootState) => state.pokemonReducer.pokemons,
  );

  React.useEffect(() => {
    dispatch(fetchPokemons);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView>
      <StatusBar />
      <FlatList<Pokemon>
        onEndReachedThreshold={0.1}
        onEndReached={() => dispatch(fetchPokemons)}
        data={pokemons}
        renderItem={({item: pokemon}) => (
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
        )}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
};

export default Home;
