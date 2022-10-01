import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {Pressable, SafeAreaView, ScrollView, StatusBar} from 'react-native';
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
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Pressable
          onPress={() => {
            dispatch(fetchPokemons);
          }}
          style={({pressed}) => ({
            width: 50,
            height: 50,
            backgroundColor: pressed ? '#fcc' : '#ccc',
          })}
        />
        {pokemons.map(pokemon => (
          <Pressable
            onPress={() => navigation.push('Focus', {pokemon})}
            key={`pokemon.${pokemon.id}`}>
            <SharedElement id={`pokemon.${pokemon.id}`}>
              <PokeCard
                size="M"
                image={{
                  uri: pokemon.sprites.front_default,
                }}
                name={pokemon.name}
                type={pokemon.types[0].type.name}
              />
            </SharedElement>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
