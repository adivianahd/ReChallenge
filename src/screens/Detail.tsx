import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {Text, Card, Image} from '../components';

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
        <SharedElement id={`pokemon.${pokemon.id}`}>
          <Card size="M" color="YELLOW">
            <Image
              size="M"
              source={{
                uri: pokemon.sprites.front_default,
              }}
            />
            <Text class="TITLE">{pokemon.name}</Text>
          </Card>
        </SharedElement>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
