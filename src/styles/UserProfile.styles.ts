// Profile.styles.ts
import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const margin = 10; // Margin between images
const imageWidth = (screenWidth - 4 * margin) / 3; // Three images and four margins (including left and right)

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

  // image gallery
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start', // Align to start to avoid spacing issues
    padding: margin / 2, // Half margin on the container
  },
  imagePlaceholder: {
    width: imageWidth,
    height: imageWidth, // Keeping the height equal to the width for square shape
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: margin,
    marginRight: margin,
    backgroundColor: '#f0f0f0',
  },
  photoUploadInstructions: {
    textAlign: 'center',
    marginVertical: 20,
  },

  // User info section
  inputSection: {
    backgroundColor: '#FFF',
    padding: 15,
    marginBottom: 10,
  },
  inputHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    backgroundColor: '#f2f2f2',
    padding: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    backgroundColor: '#f7f7f7',
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginTop: 5,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  switchLabel: {
    fontSize: 16,
    color: '#333',
  },
  subSection: {
    marginBottom: 15,
  },
  subInputHeader: {
    fontSize: 16,
    color: '#333',
  },
  addLabel: {
    position: 'absolute',
    right: 15,
    top: 5,
  },
  addLabelText: {
    color: '#E91E63',
    fontSize: 16,
  },
});
