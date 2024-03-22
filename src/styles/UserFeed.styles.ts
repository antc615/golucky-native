import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  feedBlock: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    // Add additional styling for shadow, borders etc.
  },
  carouselContainer: {
    position: 'relative',
  },
  overlayRow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    // backgroundColor: 'rgba(255, 255, 255, 0.5)', // Example: semi-transparent white background
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Example: semi-transparent white background
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
    fontSize: 12,
  },
  ellipsisIcon: {},

  iconsSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },

  iconsGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  icon: {
    marginRight: 2,
  },

  // New style for ensuring the paginator is centered directly
  paginatorWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  paginator: {},
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

  // START OF ACTION CONTAINER
  photoContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible',
  },

  iconStyle: {
    fontSize: 20,
    alignSelf: 'center',
    marginRight: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    color: 'black',
  },

  // START of ADDITIONAL INFO
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
