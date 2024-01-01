// Messages.tsx

import React from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from '..//styles/Messages.styles.ts'; // Import or define your styles
import {useNavigation} from '@react-navigation/native';
import ChatScreen from './ChatScreen.tsx';

const dummyData = [
  {
    id: '1',
    userName: 'User1',
    description: 'This is a short description of the message.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '',
    userName: 'User1',
    description: 'This is a short description of the message.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    userName: 'User1',
    description: 'This is a short description of the message.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '4',
    userName: 'User1',
    description: 'This is a short description of the message.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '5',
    userName: 'User1',
    description: 'This is a short description of the message.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '6',
    userName: 'User1',
    description: 'This is a short description of the message.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '7',
    userName: 'User1',
    description: 'This is a short description of the message.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '8',
    userName: 'User1',
    description: 'This is a short description of the message.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '9',
    userName: 'User1',
    description: 'This is a short description of the message.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '10',
    userName: 'User1',
    description: 'This is a short description of the message.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  // Add more dummy data as needed
];

const Messages: React.FC = () => {
  const navigation = useNavigation();

  const openChat = () => {
    navigation.navigate('ChatScreen'); // Add any parameters if needed
  };

  return (
    <ScrollView style={styles.container}>
      {dummyData.map(message => (
        <TouchableOpacity
          key={message.id}
          style={styles.messageBlock}
          onPress={() => openChat(message.userName)}>
          <Image source={{uri: message.imageUrl}} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.username}>{message.userName}</Text>
            <Text style={styles.description}>{message.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Messages;
