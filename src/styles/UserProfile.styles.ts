import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const buttonWidth = screenWidth / 3; // Divide the screen width by 3 to get 33%

const facebookBlue = 'color: rgb(72, 146, 243)'; // golucky blue color

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  userInfoSection: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  profilePic: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#e0e0e0',
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  aboutMe: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 1},
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,
    // elevation: 3,
  },
  firstName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  aboutMeContent: {
    // Additional styling if needed
  },
  aboutMeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  aboutMeLabel: {
    fontSize: 13,
    color: '#666',
  },
  seeMoreButton: {
    // Additional styling if needed
    marginBottom: 10,
  },
  seeMoreText: {
    color: '#666',
    fontWeight: '600',
    fontSize: 12,
  },
  expandedAboutMeContent: {
    // Additional styling if needed
  },
  aboutMeDescription: {
    fontSize: 13,
    color: '#666',
  },
  seeMore: {
    color: 'gray',
    marginTop: 10,
    fontWeight: '600',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 10,
    marginVertical: 20,
  },
  actionbutton: {
    backgroundColor: '#DDD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  actionButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  stats: {
    justifyContent: 'space-around',
    flex: 1,
  },
  actionButtons: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#DDD',
    paddingHorizontal: 5, // Reduced horizontal padding
    paddingVertical: 5, // Reduced vertical padding
    borderRadius: 5,
    justifyContent: 'center', // Centers the text vertically
    alignItems: 'center', // Centers the text horizontally
    width: buttonWidth, // Width set to 33% of screen width
    marginRight: 10,
  },
  activeButton: {
    backgroundColor: 'rgb(72, 146, 243)',
    paddingHorizontal: 5, // Reduced horizontal padding
    paddingVertical: 5, // Reduced vertical padding
    borderRadius: 5,
    justifyContent: 'center', // Centers the text vertically
    alignItems: 'center', // Centers the text horizontally
    width: buttonWidth, // Width set to 33% of screen width
    marginRight: 10,
  },
  buttonText: {
    color: '#000',
  },
  activeButtonText: {
    color: '#FFF',
  },
  gallery: {
    marginBottom: 20,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  galleryContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  galleryItem: {
    width: '48%', // Approximately two items per row
    height: 200,
    marginBottom: 10,
  },
});
