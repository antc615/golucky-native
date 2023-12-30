// BottomTabNavigator.styles.ts
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff', // White background
    borderTopColor: 'transparent', // No border on the top
    shadowOpacity: 0.25, // Subtle shadow for a floating effect
    shadowRadius: 3.84,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5, // for Android
  },
  tabIcon: {
    // If you need specific styles for icons
  },
  tabLabel: {
    fontSize: 12, // Adjust size as needed
    fontWeight: 'bold', // Bold labels
  },
});
