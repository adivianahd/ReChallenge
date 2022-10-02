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
      <FlatList
        onEndReachedThreshold={0.1}
        onEndReached={() => dispatch(fetchPokemons)}
        data={pokemons}
        renderItem={item => (
          <Pressable
            onPress={() => navigation.push('Focus', {pokemon: item.item})}
            key={`pokemon.${item.item.id}`}>
            <SharedElement id={`pokemon.${item.item.id}`}>
              <PokeCard
                key={item.item.id}
                size="M"
                image={{
                  uri: item.item.sprites.front_default,
                }}
                name={item.item.name}
                type={item.item.types[0].type.name}
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
