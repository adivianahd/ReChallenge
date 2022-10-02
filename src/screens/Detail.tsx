import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {PokeCard} from '../components';
import PokeDetail from '../components/PokeDetail';

type RootStackParamList = {
  Home: {};
  Focus: {pokemon: Pokemon};
  Detail: {pokemon: Pokemon};
};

type DetailProps = NativeStackScreenProps<
  RootStackParamList,
  'Focus',
  'MyStack'
>;

const Detail = (props: DetailProps) => {
  const {pokemon} = props.route.params;
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <PokeCard
          id={pokemon.id}
          name={pokemon.name}
          image={{uri: pokemon.sprites.front_default}}
          size="M"
          type={pokemon.types[0].type.name}
        />
        <PokeDetail label="pepe" detail="peres" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
