import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF', // Consistent background color
  },
  textContainer: {
    flex: 1,
    backgroundColor: '#FFF', // Keep background consistent
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000', // Use black for better contrast
  },
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
  },
  matchUsername: {
    marginTop: 5,
    fontWeight: 'bold',
    color: '#333', // Darker gray for emphasis
  },
  messageBlock: {
    flexDirection: 'row',
    backgroundColor: '#FFF', // Use white for message blocks
    padding: 10,
    borderRadius: 0, // Remove border radius for a more block-like appearance
    marginBottom: 10,
    alignItems: 'center', // Align items in the center vertically
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000', // Black for username to stand out
  },
  description: {
    color: '#666', // Gray for description to be less prominent
    fontSize: 14,
  },
  rowFront: {
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0', // Consistent with other dividers
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#FFF', // Keep it white for consistency
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
    backgroundColor: '#757575', // Neutral gray for a minimalistic look
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: '#616161', // Slightly darker gray for distinction
    right: 0,
  },
  backTextWhite: {
    color: '#FFF', // Keep text white for readability
  },

  collapseButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10, // Adjust as necessary for your layout
  },
});
