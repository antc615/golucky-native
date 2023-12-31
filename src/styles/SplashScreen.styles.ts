import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Aligns children to the bottom
    paddingTop: 60, // Added padding at the top
    paddingBottom: 40, // Added padding at the bottom
  },
  buttonContainer: {
    alignItems: 'center', // Centers buttons horizontally
  },
  disclaimer: {
    fontSize: 12, // Smaller font size for disclaimer
    textAlign: 'center',
    marginVertical: 10, // Adds space around the text
  },
  background: {
    flex: 1,
    justifyContent: 'flex-start', // Changed to flex-start to move content towards the top
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  titleText: {
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
    // fontFamily: 'YourCustomFont', // Include this if you have a custom font.
    marginTop: 20, // Space between logo and title
  },
  button: {
    width: '50%', // Set a specific width for all buttons
    alignItems: 'center', // Center text in the button
    padding: 10,
    marginVertical: 5, // Adds vertical space between buttons
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 15, // Space between buttons
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    // fontFamily: 'YourCustomFont',
  },
  footerText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});
