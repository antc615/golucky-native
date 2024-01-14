// ChatScreen.styles.ts
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f0f0f0', // Adjust the background color as needed
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5, // for Android
    zIndex: 1, // ensure the shadow appears above the chat content
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  backButtonText: {
    fontSize: 21,
    color: 'black', // A standard link color
  },
  headerImage: {
    width: 35, // Adjust size as needed
    height: 35,
    borderRadius: 20,
  },
  cameraIcon: {
    color: '#000', // Adjust icon color as needed
  },

  /* ScrollView, TextInput, and other UI elements */
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  userMessage: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  otherMessage: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  messageBubble: {
    maxWidth: '80%',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: '#e0e0e0', // Default color for other person
  },
  userBubble: {
    backgroundColor: '#4fc3f7', // Distinct color for user
    maxWidth: '80%',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageText: {
    color: '#333',
    fontSize: 16,
  },
  timestamp: {
    alignSelf: 'center',
    fontSize: 12,
    color: '#666',
    marginBottom: 5, // Add some space above the message bubble
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 10,
  },
  sendButton: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'transparent', // Example button color
  },
  sendButtonText: {
    color: 'gray',
    fontWeight: 'bold',
  },
  // Additional styles as needed
});
