import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ScrollView} from 'react-native';
import {PokeCard} from '../components';
import PokeDetail from '../components/PokeDetail';

type DetailProps = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const Detail = (props: DetailProps) => {
  const {pokemon} = props.route.params;
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <PokeCard
        id={pokemon.id}
        name={pokemon.name}
        image={{uri: pokemon.sprites.front_default}}
        withFavorite
        size="M"
        type={pokemon.types[0].type.name}
      />
      <PokeDetail pokemon={pokemon} />
    </ScrollView>
  );
};

export default Detail;
