// ChatScreen.tsx
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {styles} from '../styles/ChatScreen.styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import image1 from '../assets/mock-feed-assets/mock-image6.png';

const now = new Date();
const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
const twoHoursAgo = new Date(now.getTime() - 2 * 60 * 60 * 1000);
const halfHourAgo = new Date(now.getTime() - 30 * 60 * 1000);
const mockMessages = [
  {
    id: '1',
    text: 'Hey there! How are you today?',
    timestamp: twoHoursAgo,
    sender: 'other',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    id: '2',
    text: 'I am good, thanks! How about you?',
    timestamp: twoHoursAgo,
    sender: 'user',
  },
  {
    id: '3',
    text: 'Thats great hows everything going?',
    timestamp: twoHoursAgo,
    sender: 'other',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    id: '4',
    text: 'Good. I just got off a plane and landed in NYC. First time here im excited!',
    timestamp: halfHourAgo,
    sender: 'user',
  },
  {
    id: '5',
    text: 'Im going to check out a broadway show you should come!',
    timestamp: oneHourAgo,
    sender: 'user',
  },
  {
    id: '6',
    text: 'Alright lets do it!',
    timestamp: halfHourAgo,
    sender: 'other',
    imageUrl: 'https://via.placeholder.com/50',
  },
  // Add more messages as needed
];

type Message = {
  id: string;
  text: string;
  timestamp: Date;
  sender: string;
  imageUrl?: string;
};

const shouldShowTimestamp = (
  currentMsg: Message,
  previousMsg?: Message,
): boolean => {
  if (!previousMsg) return true; // Always show for the first message

  // Compare timestamps
  return (
    currentMsg.timestamp.getTime() - previousMsg.timestamp.getTime() > 3600000
  ); // 1 hour in milliseconds
};
const ChatScreen: React.FC = () => {
  const [message, setMessage] = useState('');
  const navigation = useNavigation();

  const sendMessage = () => {
    console.log(message); // Replace with actual send logic
    setMessage(''); // Reset input field after sending
  };

  const navigateToPublicProfile = () => {
    navigation.navigate('PublicProfile');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToPublicProfile}>
          <Image source={image1} style={styles.headerImage} />
        </TouchableOpacity>
        <FontAwesomeIcon icon="camera" style={styles.cameraIcon} size={24} />
      </View>

      {/* ScrollView, TextInput, and other UI elements */}
      <ScrollView style={styles.messagesContainer}>
        {mockMessages.map((msg, index) => (
          <View key={msg.id}>
            {shouldShowTimestamp(msg, mockMessages[index - 1]) && (
              <Text style={styles.timestamp}>
                {msg.timestamp.toLocaleDateString()} {/* Format timestamp */}
              </Text>
            )}
            <View
              style={
                msg.sender === 'user' ? styles.userMessage : styles.otherMessage
              }>
              {msg.sender === 'other' && (
                <Image
                  source={{uri: msg.imageUrl}}
                  style={styles.profileImage}
                />
              )}
              <View
                style={
                  msg.sender === 'user'
                    ? styles.userBubble
                    : styles.messageBubble
                }>
                <Text style={styles.messageText}>{msg.text}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
