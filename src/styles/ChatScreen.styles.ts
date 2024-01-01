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
    // Style for the chat messages area
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
