// EmailRegistration.styles.ts
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // This spaces out the header, content, and button
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f4f4f8',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start', // Aligns items to the start of the container
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  backArrowContainer: {
    marginRight: 'auto', // Pushes everything else to the right
  },
  backArrow: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center', // Centers content vertically in the available space
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 32,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subWelcomeText: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '95%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    width: '85%',
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonDisabled: {
    backgroundColor: '#cccccc',
  },
  inputError: {
    borderColor: 'red', // or any color to indicate an error
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
});
