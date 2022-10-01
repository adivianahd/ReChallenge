import {NavigationContainer} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {Pressable, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {
  createSharedElementStackNavigator,
  SharedElement,
} from 'react-navigation-shared-element';
import {Provider, useSelector} from 'react-redux';
import {Card, PokeCard, Text} from './components';
import Image from './components/Image';
import {store, useAppDispatch} from './redux';
import {fetchPokemons} from './redux/actions';

type RootStackParamList = {
  Home: {};
  Detail: {pokemon: Pokemon};
};

const Stack = createSharedElementStackNavigator<RootStackParamList>();
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
            onPress={() => navigation.push('Detail', {pokemon})}
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

type DetailProps = NativeStackScreenProps<
  RootStackParamList,
  'Detail',
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

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Detail"
            component={Detail}
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
