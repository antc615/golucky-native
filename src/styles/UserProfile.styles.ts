// Profile.styles.ts
import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileHeader: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginBottom: 20,
    paddingBottom: 20,
    paddingTop: 20,
  },
  profilePicContainer: {
    position: 'relative',
  },
  profilePic: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.4,
    borderRadius: Dimensions.get('window').width * 0.2,
    borderWidth: 3,
    borderColor: '#FFF',
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
    right: -5,
    backgroundColor: '#FFF', // Off-white color
    borderRadius: 15,
    padding: 10,
    // Add shadow if needed for better visibility
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  completionStatus: {
    position: 'absolute',
    bottom: 0, // Adjust to align with the base of the image
    width: Dimensions.get('window').width * 0.4, // Stretch across the container
    backgroundColor: '#E91E63',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  completionText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center', // Center the text within the status
  },

  // start of upload images
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
