import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Text from './components/Text';

const App = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text class={'XL'}>HOla ASTRID</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
