import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { Text, Card } from './components';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Card size="M" color="YELLOW">
          <Text class="TITLE"> Pokemon!</Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;
