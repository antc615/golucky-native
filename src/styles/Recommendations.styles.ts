import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f7',
  },
  profileCard: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 15,
    marginTop: 15,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  profileInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  userNameWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5, // Add some space between the name and the icon
  },
  verifiedIcon: {
    marginLeft: 5, // Adjust as necessary based on your design
  }, 
  userDetails: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  userBiography: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  bioAndMore: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
});
