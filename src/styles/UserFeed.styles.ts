import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  feedBlock: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    // Add additional styling for shadow, borders etc.
  },
  backButton: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    // Other styling for the back button
  },
  backButtonText: {
    color: 'white',
    // Other styling for the button text
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    // Add additional styling
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    // Add additional styling
  },
  postImage: {
    width: '100%',
    height: 200,
    // Add additional styling
  },
  iconsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    // Add additional styling
  },
});
