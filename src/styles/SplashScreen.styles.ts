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
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100, // Adjust as needed for top padding
  },
  logo: {
    width: 225, // Adjust the width as needed
    height: 225, // Adjust the height as needed
    resizeMode: 'contain',
    marginBottom: 30, // Add some space below the logo
  },
  background: {
    flex: 1,
    justifyContent: 'flex-start', // Changed to flex-start to move content towards the top
    alignItems: 'center',
  },
  titleText: {
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
    // fontFamily: 'YourCustomFont', // Include this if you have a custom font.
    marginTop: 20, // Space between logo and title
  },
  buttonContainer: {
    alignItems: 'center', // Centers buttons horizontally
    justifyContent: 'center',
    paddingBottom: 40,
  },
  disclaimer: {
    fontSize: 12, // Smaller font size for disclaimer
    textAlign: 'center',
    width: 290,
    marginVertical: 10, // Adds space around the text
  },
  button: {
    width: '50%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center', // Ensure vertical centering
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#000', // Example pink color
    fontWeight: 'bold', // Optional: to make text bold
  },
  footerText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    paddingTop: 20,
  },
});
