import React from 'react';

import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import SplashScreen from './src/components/SplashScreen'; // Update the path as necessary

import {styles} from './src/styles/App.styles'; // Update the path as necessary

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? 'black' : 'white'}
      />

      <SplashScreen />
    </SafeAreaView>
  );
}

export default App;
