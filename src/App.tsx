import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {Provider} from 'react-redux';
import {store} from './redux';
import Home from './screens/Home';
import Focus from './screens/Focus';
import Detail from './screens/Detail';

type RootStackParamList = {
  Home: {};
  Focus: {pokemon: Pokemon};
  Detail: {pokemon: Pokemon};
};

const Stack = createSharedElementStackNavigator<RootStackParamList>();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Focus"
            component={Focus}
            sharedElements={route => {
              const {pokemon} = route.params;
              return [
                {
                  id: `pokemon.${pokemon.id}.image`,
                  animation: 'fade-in',
                  resize: 'stretch',
                },
                {
                  id: `pokemon.${pokemon.id}.name`,
                  animation: 'fade-in',
                  resize: 'clip',
                },
                {
                  id: `pokemon.${pokemon.id}.details`,
                  animation: 'fade-in',
                  resize: 'clip',
                },
              ];
            }}
          />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
