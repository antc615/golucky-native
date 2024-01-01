// ChatScreen.tsx
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {styles} from '../styles/ChatScreen.styles'; // Define styles for chat screen

const ChatScreen: React.FC = () => {
  const [message, setMessage] = useState('');
  const navigation = useNavigation();

  const sendMessage = () => {
    console.log(message); // Replace with actual send logic
    setMessage(''); // Reset input field after sending
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>{'< Back'}</Text>
        {/* Simple text for back button */}
      </TouchableOpacity>
      <ScrollView style={styles.messagesContainer}>
        {/* Render chat messages here */}
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
