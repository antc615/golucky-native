import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import UserFeed from './UserFeed';

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

const FeedContainer = () => {
  return (
    <ScrollView style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Add additional styling
  },
});

export default FeedContainer;
