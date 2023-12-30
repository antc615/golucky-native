import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {styles} from './src/styles/App.styles';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/components/SplashScreen';
import FeedContainer from './src/components/FeedContainer';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons/faThumbsUp';
import {faHeart} from '@fortawesome/free-solid-svg-icons/faHeart';
import {faComment} from '@fortawesome/free-solid-svg-icons/faComment';

library.add(faThumbsUp, faHeart, faComment); // FA Library
const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? 'black' : 'white'}
      />

      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="FeedContainer" component={FeedContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
