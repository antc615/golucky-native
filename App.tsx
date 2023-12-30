import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {styles} from './src/styles/App.styles';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/components/SplashScreen';
import BottomTabNavigator from './src/components/BottomTabNavigator';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons/faThumbsUp';
import {faHeart} from '@fortawesome/free-solid-svg-icons/faHeart';
import {faComment} from '@fortawesome/free-solid-svg-icons/faComment';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {faRss} from '@fortawesome/free-solid-svg-icons/faRss';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faBell} from '@fortawesome/free-solid-svg-icons/faBell';
import {faCog} from '@fortawesome/free-solid-svg-icons/faCog';
import {faCamera} from '@fortawesome/free-solid-svg-icons/faCamera';

library.add(
  faThumbsUp,
  faHeart,
  faComment,
  faHome,
  faRss,
  faUser,
  faBell,
  faCog,
  faCamera,
); // FA Library

const RootStack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? 'black' : 'white'}
      />

      <NavigationContainer>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
          <RootStack.Screen name="SplashScreen" component={SplashScreen} />
          <RootStack.Screen name="MainApp" component={BottomTabNavigator} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
