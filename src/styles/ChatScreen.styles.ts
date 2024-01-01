// ChatScreen.styles.ts
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    padding: 10,
    // Adjust the styling as needed
  },
  backButtonText: {
    // Styling for the back button text
  },
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
    maxWidth: '70%',
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
    backgroundColor: '#4CAF50', // Example button color
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  // Additional styles as needed
});
