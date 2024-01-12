// Messages.styles.ts

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF', // Consistent background color
  },
  textContainer: {
    flex: 1,
    backgroundColor: '#FFF', // Consistent background color
  },
  headerText: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  // new matches styles
  newMatchesContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  matchItem: {
    alignItems: 'center',
    marginRight: 5,
    marginLeft: 15,
  },
  matchImage: {
    width: 90,
    height: 110,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#E91E63', // Use your theme color
  },
  matchUsername: {
    marginTop: 5,
    fontWeight: 'bold',
    color: '#333',
  },

  // Messages styles
  messageBlock: {
    flexDirection: 'row',
    // backgroundColor: '#f7f7f7', // Light grey background for each message block
    backgroundColor: '#fff', // Light grey background for each message block
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
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#E91E63', // Theme color for username
  },
  description: {
    color: '#666', // Subtle color for description
    fontSize: 14,
  },
  // Styles for SwipeListView
  rowFront: {
    backgroundColor: '#FFF',
    // borderBottomColor: '#DDD', // subtle border color for separation
    // borderBottomWidth: 1,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: '#1E88E5', // Blue color for "Start Game" button
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: '#E91E63', // Pink color matching username for "Chat" button
    right: 0,
  },
  backTextWhite: {
    color: '#FFF', // White text for buttons
  },
});
