import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-start', // Changed to flex-start to move content towards the top
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between', // Adjusted for spacing
    alignItems: 'center',
    paddingTop: 60, // Added padding at the top
    paddingBottom: 40, // Added padding at the bottom
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  titleText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    // fontFamily: 'YourCustomFont', // Include this if you have a custom font.
    marginTop: 20, // Space between logo and title
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
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
    fontSize: 18,
    color: '#000',
    // fontFamily: 'YourCustomFont',
  },
  footerText: {
    fontSize: 16,
    color: '#fff',
    // fontFamily: 'YourCustomFont',
  },
});