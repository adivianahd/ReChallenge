import {NavigationContainer} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {Pressable, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {
  createSharedElementStackNavigator,
  SharedElement,
} from 'react-navigation-shared-element';
import {Provider, useSelector} from 'react-redux';
import {Card, Text} from './components';
import Image from './components/Image';
import {store, useAppDispatch} from './redux';
import {fetchPokemons} from './redux/actions';

type RootStackParamList = {
  HomeScreen: {};
  DetailScreen: {pokemon: Pokemon};
};

const Stack = createSharedElementStackNavigator<RootStackParamList>();
type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'HomeScreen',
  'MyStack'
>;

const HomeScreen = (props: HomeScreenProps) => {
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
            onPress={() => navigation.push('DetailScreen', {pokemon})}
            key={`pokemon.${pokemon.id}`}>
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
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

type DetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'DetailScreen',
  'MyStack'
>;

const DetailScreen = (props: DetailScreenProps) => {
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

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen
            name="DetailScreen"
            component={DetailScreen}
            sharedElements={route => {
              const {pokemon} = route.params;
              return [`pokemon.${pokemon.id}`];
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
