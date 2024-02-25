import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {styles} from './src/styles/App.styles';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/components/SplashScreen';
import BottomTabNavigator from './src/components/BottomTabNavigator';
import ChatScreen from './src/components/ChatScreen';
import SignIn from './src/components/SignIn';
import EmailRegistration from './src/components/registrationComponents/EmailRegistration';
import UsernamePasswordRegistration from './src/components/registrationComponents/UsernamePasswordRegistration';
import BasicInfoRegistration from './src/components/registrationComponents/BasicInfoRegistration';
import PhoneNumberRegistration from './src/components/registrationComponents/PhoneNumberRegistration';
import ImageRegistration from './src/components/registrationComponents/ImageRegistration';

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
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons/faEllipsisH';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons/faGraduationCap';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons/faBriefcase';
import {faStar} from '@fortawesome/free-solid-svg-icons/faStar';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';

import {faHeart as farHeart} from '@fortawesome/free-regular-svg-icons/faHeart';
import {faComment as farComment} from '@fortawesome/free-regular-svg-icons/faComment';
import {faMessage as farMessage} from '@fortawesome/free-regular-svg-icons/faMessage';
import {faUser as farUser} from '@fortawesome/free-regular-svg-icons/faUser';
import {faBell as farBell} from '@fortawesome/free-regular-svg-icons/faBell';
import {faCheckCircle as farCheckCircle} from '@fortawesome/free-regular-svg-icons/faCheckCircle';
import {faGem as farGem} from '@fortawesome/free-regular-svg-icons/faGem';
import {faThumbsUp as farThumbsUp} from '@fortawesome/free-regular-svg-icons/faThumbsUp';
import {faEdit as farEdit} from '@fortawesome/free-regular-svg-icons/faEdit';
import {faTrashAlt as farTrash} from '@fortawesome/free-regular-svg-icons/faTrashAlt';

import PublicProfile from './src/components/PublicProfile';
import AccountSettings from './src/components/AccountSettings';

library.add(
  faThumbsUp,
  faHeart,
  faComment,
  faHome,
  faRss,
  faUser,
  faBell,
  faCheckCircle,
  faCog,
  faCamera,
  faBars,
  faEllipsisH,
  farHeart,
  farComment,
  farMessage,
  farUser,
  farBell,
  farCheckCircle,
  farGem,
  farThumbsUp,
  farEdit,
  farTrash,
  faGraduationCap,
  faBriefcase,
  faStar,
  faSearch,
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
          <RootStack.Screen name="SignIn" component={SignIn} />
          <RootStack.Screen name="MainApp" component={BottomTabNavigator} />
          <RootStack.Screen name="ChatScreen" component={ChatScreen} />
          <RootStack.Screen name="PublicProfile" component={PublicProfile} />
          <RootStack.Screen
            name="AccountSettings"
            component={AccountSettings}
          />
          <RootStack.Screen
            name="EmailRegistration"
            component={EmailRegistration}
          />
          <RootStack.Screen
            name="UsernamePasswordRegistration"
            component={UsernamePasswordRegistration}
          />
          <RootStack.Screen
            name="BasicInfoRegistration"
            component={BasicInfoRegistration}
          />
          <RootStack.Screen
            name="PhoneNumberRegistration"
            component={PhoneNumberRegistration}
          />
          <RootStack.Screen
            name="ImageRegistration"
            component={ImageRegistration}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
