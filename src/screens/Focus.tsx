import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {Text, Card, Image} from '../components';
import {Capitalize} from '../helpers/utils';

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
        <Card color="YELLOW">
          <SharedElement id={`pokemon.${pokemon.id}.image`}>
            <Image
              size="L"
              source={{
                uri: pokemon.sprites.front_default,
              }}
            />
          </SharedElement>
          <SharedElement id={`pokemon.${pokemon.id}.name`}>
            <Text class="TITLE">{Capitalize(pokemon.name)}</Text>
          </SharedElement>
          <SharedElement id={`pokemon.${pokemon.id}.details`}>
            <TouchableOpacity
              onPress={() => navigation.push('Detail', {pokemon})}>
              <Text class="COMMON">More details...</Text>
            </TouchableOpacity>
          </SharedElement>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Focus;
