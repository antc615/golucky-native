const dummyData = [
  {
    id: '1',
    userName: 'User1',
    profilePic: 'https://via.placeholder.com/150',
    postImage: 'https://via.placeholder.com/300',
  },
  {
    id: '2',
    userName: 'User2',
    profilePic: 'https://via.placeholder.com/150',
    postImage: 'https://via.placeholder.com/300',
  },
  {
    id: '3',
    userName: 'User3',
    profilePic: 'https://via.placeholder.com/150',
    postImage: 'https://via.placeholder.com/300',
  },
];
import React from 'react';
import {ScrollView, TouchableOpacity, Text} from 'react-native';
import UserFeed from './UserFeed';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {styles} from '../styles/FeedContainer.styles';

type RootStackParamList = {
  SplashScreen: undefined;
  FeedContainer: undefined;
  // ... other routes
};

type FeedContainerNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'FeedContainer'
>;

interface FeedContainerProps {
  navigation: FeedContainerNavigationProp;
  route: RouteProp<RootStackParamList, 'FeedContainer'>;
  // Add other props here if needed
}

const FeedContainer: React.FC<FeedContainerProps> = ({
  navigation,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
}) => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('SplashScreen')}>
        <Text style={styles.backButtonText}>Back to Splash</Text>
      </TouchableOpacity>
      {dummyData.map(item => (
        <UserFeed
          key={item.id}
          userName={item.userName}
          profilePic={item.profilePic}
          postImage={item.postImage}
        />
      ))}
    </ScrollView>
  );
};

export default FeedContainer;
