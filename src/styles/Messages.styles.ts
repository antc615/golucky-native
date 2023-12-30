// Messages.styles.ts

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF', // Consistent background color
  },
  messageBlock: {
    flexDirection: 'row',
    backgroundColor: '#f7f7f7', // Light grey background for each message block
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // for Android
    marginBottom: 10,
    alignItems: 'center', // Align items in the center vertically
  },
  image: {
    width: 60, // Adjust as needed
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#E91E63', // Theme color for username
  },
  description: {
    color: '#666', // Subtle color for description
    fontSize: 14,
  },
});
