import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {Text, Card} from './components';
import Image from './components/Image';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Card size="M" color="YELLOW">
          <Image
            size="M"
            source={{
              uri: 'https://www.pngkey.com/png/detail/21-217353_fox-png-transparent-free-images-imagen-de-un.png',
            }}
          />
          <Text class="TITLE"> Pokemon!</Text>
        </Card>
        <Card size="S" color="BLUE">
          <Image
            size="S"
            source={{
              uri: 'https://www.pngkey.com/png/detail/21-217353_fox-png-transparent-free-images-imagen-de-un.png',
            }}
          />
          <Text class="TITLE"> Pokemon!</Text>
        </Card>
        <Card size="L" color="ORANGE">
          <Text class="TITLE"> Pokemon!</Text>
          <Image
            size="L"
            source={{
              uri: 'https://www.pngkey.com/png/detail/21-217353_fox-png-transparent-free-images-imagen-de-un.png',
            }}
          />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;
