import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const numColumns = 2; // Two images per row
const numRows = 3; // Three rows
const padding = 4; // 4 pixels padding around each image

// Account for padding around each image
const imageSize = (windowWidth - padding * (numColumns + 1)) / numColumns;

export default StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
  container: {
    padding: padding,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Space images evenly across the container
    marginBottom: padding, // Add some space below the grid for scrolling
  },
  imagePlaceholder: {
    width: imageSize,
    height: imageSize, // Square images
    justifyContent: 'center',
    alignItems: 'center',
    // margin: padding / 2, // Half padding around each image
    borderRadius: 10, // Slightly rounded corners for aesthetics
    borderWidth: 1, // Thin border for each placeholder
    borderColor: '#eaeaea', // Light grey border color
    overflow: 'hidden', // Hide anything that goes outside the placeholder bounds
    backgroundColor: '#f7f7f7', // Light grey background for the placeholder
  },
  image: {
    width: '100%',
    height: '100%',
  },
  cameraIcon: {
    fontSize: 24,
    color: '#cccccc', // Light grey color for the camera icon
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222', // Dark color for text for better readability
    textAlign: 'center', // Center align the title text
    marginBottom: 16, // Margin at the bottom for spacing
  },
  nextButton: {
    backgroundColor: '#007bff', // A bright blue color for the button
    borderRadius: 25, // Fully rounded corners for a pill-shaped button
    paddingVertical: 12, // Vertical padding for the button's height
    paddingHorizontal: 30, // Horizontal padding for the button's width
    alignSelf: 'center', // Center the button in the container
    marginTop: 20, // Space at the top
  },
  nextButtonText: {
    color: '#ffffff', // White color for the button text
    fontSize: 16, // Size of the button text
    fontWeight: '600', // Semi-bold weight for the button text
  },
  deleteIcon: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Semi-transparent background
    borderRadius: 15, // Rounded edges
    padding: 5,
  },
});
