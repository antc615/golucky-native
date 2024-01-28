import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f8', // Light grey background
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40, // Adjust as needed for positioning
    left: 20, // Adjust as needed for positioning
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#007bff', // Match the button color
  },
  backButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333', // Dark text color
    marginBottom: 30,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#007bff', // Border color
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    width: '100%',
    backgroundColor: '#007bff', // Button color
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
