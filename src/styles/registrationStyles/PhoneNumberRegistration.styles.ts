import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#f4f4f8',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f4f4f8',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  backArrowContainer: {
    marginRight: 'auto',
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
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 32,
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
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
  disclaimer: {
    fontSize: 12,
    textAlign: 'center',
    color: '#888',
    marginBottom: 20,
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
});
