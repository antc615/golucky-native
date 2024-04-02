import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  matchContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  matchCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  matchHeaderText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  matchProfilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  matchText: {
    textAlign: 'center',
    marginBottom: 20,
  },
  matchButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  matchButton: {
    backgroundColor: '#FF5864',
    padding: 10,
    borderRadius: 20,
    width: '40%',
    alignItems: 'center',
  },
  matchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
