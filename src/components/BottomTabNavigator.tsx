/* eslint-disable react/no-unstable-nested-components */
// BottomTabNavigator.tsx

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import FeedContainer from '../components/FeedContainer';
import Messages from '../components/Messages';
import Explore from './Notifications';
import UserProfile from '../components/UserProfile';
import {styles} from '../styles/BottomTabNavigator.styles'; // Import your styles
import SalesComponent from './Sales';

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
              iconName = ['far', 'message'];
              break;
            case 'Profile':
              iconName = ['far', 'user'];
              break;
            case 'Notifications':
              iconName = ['far', 'bell'];
              break;
            case 'Sales':
              iconName = ['far', 'gem'];
              break;
            case 'Settings':
              iconName = ['far', 'cog'];
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
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Feed"
        component={FeedContainer}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Notifications"
        component={Explore}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Sales"
        component={SalesComponent}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfile}
        options={{headerShown: false}}
      />
      {/* Add other Tab.Screen components here for additional tabs */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
