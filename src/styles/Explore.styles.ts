// Explore.styles.ts

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  fullWidthImage: {
    width: '100%',
    height: 200, // Adjust as needed
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  halfWidthImage: {
    width: '48%', // Slightly less than half to account for padding
    height: 150, // Adjust as needed
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  overlayText: {
    color: 'white', // Choose a color that stands out
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Add more styles as needed
});
