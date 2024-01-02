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
import {ScrollView} from 'react-native';
import UserFeed from './UserFeed';
import HeaderComponent from './HeaderComponent';

import {styles} from '../styles/FeedContainer.styles';

// Inside FeedContainer component
const FeedContainer: React.FC = () => {
  return (
    <>
      <HeaderComponent showIcons={false} />
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
    </>
  );
};

export default FeedContainer;
