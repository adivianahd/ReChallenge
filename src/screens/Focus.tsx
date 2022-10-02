import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {PokeCard, Text} from '../components';

type RootStackParamList = {
  Home: {};
  Focus: {pokemon: Pokemon};
  Detail: {pokemon: Pokemon};
};

type FocusProps = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const Focus = (props: FocusProps) => {
  const {navigation} = props;
  const {pokemon} = props.route.params;
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <PokeCard
          key={pokemon.id}
          id={pokemon.id}
          size="L"
          image={{
            uri: pokemon.sprites.front_default,
          }}
          name={pokemon.name}
          type={pokemon.types[0].type.name}
        />

        <TouchableOpacity onPress={() => navigation.push('Detail', {pokemon})}>
          <Text class="COMMON">More details...</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Focus;
