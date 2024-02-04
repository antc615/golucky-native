import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#f4f4f8',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  backArrowContainer: {
    marginRight: 10,
  },
  backArrow: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  formGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  picker: {
    flex: 1,
    marginRight: 10,
    minWidth: 60,
  },
  input: {
    flex: 2,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize: 16,
  },

  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  label: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
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
  // Adjust or add more styles as needed
});
