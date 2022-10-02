import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {Provider} from 'react-redux';
import {store} from './redux';
import Home from './screens/Home';
import Focus from './screens/Focus';
import Detail from './screens/Detail';

declare global {
  type RootStackParamList = {
    Home: {};
    Focus: {pokemon: Pokemon};
    Detail: {pokemon: Pokemon};
  };
}

const Stack = createSharedElementStackNavigator<RootStackParamList>();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: {padding: 10},
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Focus"
            component={Focus}
            sharedElements={route => {
              const {pokemon} = route.params;
              return [
                {
                  id: `pokemon.${pokemon.id}.image`,
                  animation: 'fade',
                  resize: 'stretch',
                  align: 'center-center',
                },
                {
                  id: `pokemon.${pokemon.id}.name`,
                  animation: 'fade-in',
                  resize: 'clip',
                  align: 'center-center',
                },
                {
                  id: `pokemon.${pokemon.id}.favorite`,
                  animation: 'fade-out',
                  resize: 'stretch',
                  align: 'center-center',
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
