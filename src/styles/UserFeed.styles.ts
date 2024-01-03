import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  feedBlock: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    paddingTop: 20,
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
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingLeft: 5,
    paddingRight: 10,
  },
  profilePic: {
    width: 40, // Adjust size as needed
    height: 40, // Adjust size as needed
    borderRadius: 20,
  },
  userNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  userName: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  verifiedIcon: {
    marginLeft: 5,
    color: 'blue',
    fontSize: 12, // Small size for the verified icon
  },
  ellipsisIcon: {
    fontSize: 16, // Smaller ellipsis icon
  },
  // ... other styles
  iconsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  iconsGroup: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10, // Spacing between icons
  },
  paginator: {
    // Center your paginator styling
    // If necessary, adjust width to help with centering
  },
  likesSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 30,
    height: 30,
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
  paginatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginatorNode: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'lightgray',
    marginHorizontal: 4,
  },
  activeNode: {
    backgroundColor: 'blue',
  },
});
