import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  backArrowContainer: {
    marginRight: 20,
  },
  backArrow: {
    fontSize: 18,
    color: '#007AFF', // iOS system blue
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    flexGrow: 1,
    textAlign: 'center',
  },
  content: {
    alignItems: 'stretch',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '600',
    color: '#333333',
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#FAFAFA',
  },
  inputError: {
    borderColor: '#FF3B30', // iOS system red
  },
  errorText: {
    fontSize: 14,
    color: '#FF3B30',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonDisabled: {
    backgroundColor: '#CCCCCC',
  },
});
