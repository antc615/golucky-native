// Profile.styles.ts
import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  // HeaderProfile picture section
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePic: {
    width: Dimensions.get('window').width * 0.4, // 40% of screen width
    height: Dimensions.get('window').width * 0.4, // Equal width and height for a circle
    borderRadius: Dimensions.get('window').width * 0.2, // Half the width and height
    borderWidth: 3,
    borderColor: '#FFF',
    position: 'relative', // Needed to position edit button
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  editButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#E91E63', // Theme color
    borderRadius: 20,
    padding: 5,
  },
  completionStatus: {
    position: 'absolute',
    bottom: -10, // Adjust as needed
    backgroundColor: '#000',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  completionText: {
    color: '#FFF',
    fontSize: 14,
  },

  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imagePlaceholder: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f0f0f0', // A light background color
  },
  photoUploadInstructions: {
    textAlign: 'center',
    marginVertical: 10,
  },
  section: {
    backgroundColor: '#FFF', // Light background for each section
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // for Android
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E91E63', // Theme color for section titles
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f7f7f7', // Light grey background for input fields
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  tag: {
    backgroundColor: '#FFC107', // A warm color for tags
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  tagText: {
    color: '#FFF', // White text for tags
    fontSize: 14,
  },
  saveButton: {
    backgroundColor: '#4CAF50', // Green color for the save button
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
