import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white', // Replace with the color of the top status bar area
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Replace with your gradient or background color
  },
  logo: {
    width: 300,
    height: 300, // Adjust according to your logo's aspect ratio
  },
  registerButton: {
    backgroundColor: '#FFFFFF', // Replace with your button's background color
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 25,
    marginTop: 30,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {height: 0, width: 0},
  },
  registerButtonText: {
    color: '#000000', // Replace with your button's text color
    fontSize: 18,
    // fontFamily: 'YourFontFamily', // Include this if you have a custom font
  },
  footerText: {
    position: 'absolute',
    bottom: 30,
    color: '#000000', // Replace with your footer text color
    fontSize: 14,
    // fontFamily: 'YourFontFamily', // Include this if you have a custom font
  },
});

export default styles;
