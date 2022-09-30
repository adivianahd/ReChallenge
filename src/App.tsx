import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Pressable, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {Text, Card} from './components';
import Image from './components/Image';
import {Provider, useSelector} from 'react-redux';
import {store, useAppDispatch} from './redux';
import {fetchPokemons} from './redux/actions';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
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
          <Card size="M" color="YELLOW">
            <Image
              size="M"
              source={{
                uri: pokemon.sprites.front_default,
              }}
            />
            <Text class="TITLE">{pokemon.name}</Text>
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
