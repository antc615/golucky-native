import React from 'react';
import {ScrollView} from 'react-native';
import UserFeed from './UserFeed';
import HeaderComponent from './HeaderComponent';

import {styles} from '../styles/FeedContainer.styles';

import image1 from '../assets/mock-feed-assets/mock-image1.png';
import image2 from '../assets/mock-feed-assets/mock-image2.png';
import image3 from '../assets/mock-feed-assets/mock-image3.png';
import image4 from '../assets/mock-feed-assets/mock-image4.png';
import image5 from '../assets/mock-feed-assets/mock-image5.png';
import image6 from '../assets/mock-feed-assets/mock-image6.png';
import image7 from '../assets/mock-feed-assets/mock-image7.png';
import image8 from '../assets/mock-feed-assets/mock-image8.png';
import image9 from '../assets/mock-feed-assets/mock-image9.png';

const dummyData = [
  {
    id: '2',
    userName: 'User1',
    profilePic: image4,
    postImages: [image6, image5],
  },
  // Add more users as needed
  {
    id: '3',
    userName: 'User2',
    profilePic: image7,
    postImages: [image8, image9],
  },
  {
    id: '1',
    userName: 'User3',
    profilePic: image1,
    postImages: [image2, image3],
  },
];

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
            postImages={item.postImages} // Updated to postImages
          />
        ))}
      </ScrollView>
    </>
  );
};

export default FeedContainer;
