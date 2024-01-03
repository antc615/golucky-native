/* eslint-disable react/no-unstable-nested-components */
// BottomTabNavigator.tsx

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import SplashScreen from '../components/SplashScreen';
import FeedContainer from '../components/FeedContainer';
import Messages from '../components/Messages';
import Profile from '../components/Profile';
import Explore from './Notifications';

import {styles} from '../styles/BottomTabNavigator.styles'; // Import your styles

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName;
          let size = 20;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Feed':
              iconName = 'home';
              break;
            case 'Messages':
              iconName = 'comment';
              break;
            // Add other cases for different tabs
            case 'Profile':
              iconName = 'user';
              break;
            case 'Notifications':
              iconName = 'bell';
              break;
            case 'Settings':
              iconName = 'cog';
              break;
          }

          return (
            <FontAwesomeIcon
              icon={iconName}
              size={size}
              color={color}
              style={styles.tabIcon}
            />
          );
        },
        tabBarLabel: () => null,
        tabBarLabelStyle: styles.tabLabel,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#000', // Pinkish color for active tab
        tabBarInactiveTintColor: 'gray',
        // Add other tabBarOptions as needed
      })}>
      {/* <Tab.Screen name="Home" component={SplashScreen} /> */}
      <Tab.Screen
        name="Feed"
        component={FeedContainer}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Notifications"
        component={Explore}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      {/* Add other Tab.Screen components here for additional tabs */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
