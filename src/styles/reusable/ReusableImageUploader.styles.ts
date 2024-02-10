import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const imagePlaceholderSize = windowWidth / 3 - 20; // Dynamic size based on screen width

export default StyleSheet.create({
  scrollView: {
    backgroundColor: '#f4f4f8',
  },
  container: {
    padding: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  backArrowContainer: {
    marginRight: 'auto', // Push everything else to the right
  },
  backArrow: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff', // Colorful accent for back arrow
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600', // Less boldness for a modern look
    color: '#333', // Darker text for better readability
    flex: 1,
    textAlign: 'center', // Ensure title is centered
  },
  title: {
    fontSize: 18,
    fontWeight: '500', // Slightly bold for importance
    textAlign: 'center',
    color: '#444', // Dark grey for subtle emphasis
    marginBottom: 30, // Increase spacing for better separation
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around', // Evenly spread on all sides
    marginBottom: 20,
  },
  imagePlaceholder: {
    width: imagePlaceholderSize,
    height: imagePlaceholderSize,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f5', // Lighter background for placeholders
    borderRadius: 10, // Rounded corners for modern look
    marginBottom: 10,
    borderWidth: 2, // Subtle border
    borderColor: '#e0e0e0', // Soft border color
    overflow: 'hidden', // Ensure contents do not bleed out
  },
  cameraIcon: {
    width: 40, // Slightly smaller for balance
    height: 40, // Match width for consistency
    opacity: 0.6, // Slightly transparent for a softer look
  },
  subText: {
    fontSize: 14, // Smaller font size for subtlety
    color: '#666', // Soft color for instructions
    marginBottom: 5,
  },
  nextButton: {
    backgroundColor: '#007bff',
    borderRadius: 20, // More pronounced rounded corners
    paddingVertical: 12, // Adjusted padding for better touch area
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '90%', // Make button wider for easier tapping
    shadowColor: '#000', // Shadow for depth
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1, // Soft shadow
    shadowRadius: 4,
    elevation: 4, // Elevation for Android
  },
  nextButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonDisabled: {
    backgroundColor: '#cccccc', // Dull color for disabled state
  },
});
