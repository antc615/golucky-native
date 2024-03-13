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
  userNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  verifiedIcon: {
    marginLeft: 5,
    color: 'blue',
    fontSize: 12, // Small size for the verified icon
  },
  ellipsisIcon: {},
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

  actionIconsContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100, // Adjust based on your layout
  },
  likeIcon: {
    // Style for the like icon
  },
  dislikeIcon: {
    // Style for the dislike icon
  },
  messageIcon: {
    // Style for the message icon
  },

  additionalInfoSection: {
    backgroundColor: '#ffffff',
    marginVertical: 12,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 15,
    marginTop: 10,
  },
  userName: {
    fontSize: 36,
    fontStyle: 'italic',
    color: '#2A2E43',
    marginBottom: 4,
  },
  userSubText: {
    fontSize: 16,
    color: '#6D7187',
    fontWeight: 'normal',
    marginBottom: 20,
  },
  headerBlock: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2A2E43',
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4, // Reduced spacing between rows
  },
  iconStyle: {
    marginRight: 6, // Compact spacing next to the icon
    fontSize: 14, // Smaller icons for a sleek look
  },
  detailLabel: {
    fontSize: 14, // Smaller font size for labels
    fontWeight: 'bold',
    color: '#4A4A4A', // A color that ensures readability
  },
  detailValue: {
    fontSize: 14, // Matching font size for values
    color: '#4A4A4A',
    fontWeight: 'normal',
    marginLeft: 2, // Reduced spacing for a compact look
    flex: 1,
  },
  // BANNER
  bannerContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullWidthBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  bannerIcon: {
    marginRight: 8, // Space between icon and text
  },
  bannerText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#000', // Example text color
  },
  bannerTouchable: {
    flexDirection: 'row', // Ensures icon and text are laid out horizontally
    alignItems: 'center', // Aligns items vertically in the center
  },
  banner: {
    marginTop: 10,
    backgroundColor: '#f0f0f0', // Example background color
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});
