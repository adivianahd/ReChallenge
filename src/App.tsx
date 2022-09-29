import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import Text from './components/Text';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text class={'MUTED'}> perrooo</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;
