import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  section: {
    paddingVertical: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 12,
    marginHorizontal: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#e7e7e7',
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginHorizontal: 10,
    marginTop: -10, // to overlap with the bottom of the photo
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    zIndex: 1, // to ensure this layer is above the photo
  },
  commentContentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginHorizontal: 10,
    marginTop: -10, // to overlap with the bottom of the photo
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    zIndex: 1, // to ensure this layer is above the photo
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
    marginHorizontal: 10,
    marginTop: 5,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    flex: 1,
  },
  userName: {
    fontWeight: '600',
    fontSize: 16,
    color: '#333333',
    marginBottom: 5,
  },
  text: {
    fontSize: 15,
    color: '#555555',
    marginBottom: 8,
  },
  icons: {
    flexDirection: 'row',
    marginTop: 8,
  },
  icon: {
    marginLeft: 10,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#e9ecef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: screenWidth - 20,
    height: 200,
    borderRadius: 15,
    marginBottom: 10,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  date: {
    fontSize: 13,
    color: '#6c757d',
    marginTop: 5,
  },
  commentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    padding: 10,
  },
  commentTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  commentText: {
    color: '#333',
    fontSize: 14,
  },
  historyItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginHorizontal: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  historyText: {
    fontSize: 14,
    color: '#555',
  },
  // Additional styles can be added as needed
});
