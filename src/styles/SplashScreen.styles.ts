import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
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
    // fontFamily: 'YourCustomFont', // Make sure to include your custom font if you have one.
  },
  footerText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 20,
    // fontFamily: 'YourCustomFont', // Include this if you have a custom font.
  },
});
