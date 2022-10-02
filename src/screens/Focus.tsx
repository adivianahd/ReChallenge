import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {PokeCard, Text} from '../components';

const MoreDetailButton = styled.TouchableOpacity`
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border-width: 1px;
  border-color: #000;
  margin-top: 10px;
  background: #fff;
`;

type FocusProps = NativeStackScreenProps<RootStackParamList, 'Focus'>;

const Focus = (props: FocusProps) => {
  const {navigation} = props;
  const {pokemon} = props.route.params;
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <PokeCard
        key={pokemon.id}
        id={pokemon.id}
        withFavorite
        size="L"
        image={{
          uri: pokemon.sprites.front_default,
        }}
        name={pokemon.name}
        type={pokemon.types[0].type.name}
      />

      <MoreDetailButton onPress={() => navigation.push('Detail', {pokemon})}>
        <Text class="COMMON">More details...</Text>
      </MoreDetailButton>
    </ScrollView>
  );
};

export default Focus;
