import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Pressable} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {Text, Card, Image} from '../components';

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
        <SharedElement id={`pokemon.${pokemon.id}`}>
          <Card size="M" color="YELLOW">
            <Image
              size="M"
              source={{
                uri: pokemon.sprites.front_default,
              }}
            />
            <Text class="TITLE">{pokemon.name}</Text>
            <Pressable
              onPress={() => navigation.push('Detail', {pokemon})}
              style={({pressed}) => ({
                width: 50,
                height: 50,
                backgroundColor: pressed ? '#fcc' : '#ccc',
              })}
            />
          </Card>
        </SharedElement>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Focus;
