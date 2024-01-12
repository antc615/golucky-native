// Messages.tsx

import React from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from '..//styles/Messages.styles.ts'; // Import or define your styles
import {useNavigation} from '@react-navigation/native';
import HeaderComponent from './HeaderComponent';
import {SwipeListView} from 'react-native-swipe-list-view';

import image1 from '../assets/mock-feed-assets/mock-image1.png';
import image2 from '../assets/mock-feed-assets/mock-image2.png';
import image3 from '../assets/mock-feed-assets/mock-image3.png';

const dummyData = [
  {
    id: '1',
    userName: 'User1',
    description: 'This is a short description of the message.',
    imageUrl: image1,
  },
  {
    id: '',
    userName: 'User1',
    description: 'This is a short description of the message.',
    imageUrl: image2,
  },
  {
    id: '3',
    userName: 'User1',
    description: 'This is a short description of the message.',
    imageUrl: image3,
  },
  // Add more dummy data as needed
];

const newMatchesData = [
  {id: '1', userName: 'Alice', imageUrl: image1},
  {id: '2', userName: 'Bob', imageUrl: image2},
  {id: '3', userName: 'Charlie', imageUrl: image3},
  // ... more dummy data ...
];

const NewMatches: React.FC = () => (
  <View style={styles.newMatchesContainer}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {newMatchesData.map(match => (
        <View key={match.id} style={styles.matchItem}>
          <Image source={match.imageUrl} style={styles.matchImage} />
          <Text style={styles.matchUsername}>{match.userName}</Text>
        </View>
      ))}
    </ScrollView>
  </View>
);

const Messages: React.FC = () => {
  const navigation = useNavigation();

  const openChat = () => {
    navigation.navigate('ChatScreen'); // Add any parameters if needed
  };

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnLeft]}
        onPress={() => initiateGame(data.item)}>
        <Text style={styles.backTextWhite}>Start Game</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => startChat(data.item)}>
        <Text style={styles.backTextWhite}>Chat</Text>
      </TouchableOpacity>
    </View>
  );

  const initiateGame = item => {
    // Logic to initiate game
  };

  const startChat = item => {
    // Logic to start chat
  };

  return (
    <>
      <HeaderComponent showIcons={false} />
      <ScrollView style={styles.container}>
        <NewMatches />
        <SwipeListView
          data={dummyData}
          renderItem={(data, rowMap) => (
            <View style={styles.rowFront}>
              <TouchableOpacity
                onPress={() => openChat(data.item.userName)}
                style={styles.messageBlock}>
                <Image source={data.item.imageUrl} style={styles.image} />
                <View style={styles.textContainer}>
                  <Text style={styles.username}>{data.item.userName}</Text>
                  <Text style={styles.description}>
                    {data.item.description}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-150} // Adjust as needed
          previewRowKey={'0'}
          previewOpenValue={-40}
          previewOpenDelay={3000}
        />
      </ScrollView>
    </>
  );
};

export default Messages;
