import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const primaryColor = '#4CAF50'; // Example primary color
const secondaryColor = '#E91E63'; // Example secondary color
const backgroundColor = '#f5f5f5'; // Background color
const textColor = '#333'; // Primary text color
const subTextColor = '#666'; // Subtext color
const borderColor = '#ddd'; // Border color
const shadowColor = '#000'; // Shadow color

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  messageSection: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: borderColor,
    marginBottom: 20,
    shadowColor: shadowColor,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  planSection: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  selectPlanText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: primaryColor,
    marginBottom: 10,
    textAlign: 'center',
  },
  planCard: {
    borderRadius: 10,
    padding: 15,
    minHeight: 150,
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: shadowColor,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
    borderColor: borderColor,
    borderWidth: 1,
  },
  activePlanCard: {
    backgroundColor: '#e6f7ff', // Light blue background for active plan
    borderColor: primaryColor, // Highlight with primary color border
    borderWidth: 2,
  },
  activePlanName: {
    color: primaryColor, // Highlight the plan name with primary color
  },
  planName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: secondaryColor,
  },
  planDuration: {
    fontSize: 24,
    fontWeight: 'bold',
    color: textColor,
    marginVertical: 5,
  },
  planPrice: {
    fontSize: 16,
    color: subTextColor,
  },
  disclaimerSection: {
    padding: 20,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: borderColor,
    marginBottom: 20,
    shadowColor: shadowColor,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  featuresSection: {
    padding: 20,
    borderWidth: 1,
    borderColor: borderColor,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 20,
    shadowColor: shadowColor,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  featuresHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: primaryColor,
    marginBottom: 10,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  featureText: {
    marginLeft: 10,
    fontSize: 16,
    color: textColor,
  },
  summarySection: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: shadowColor,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  summaryText: {
    fontSize: 18,
    marginBottom: 15,
    color: textColor,
  },
  continueButton: {
    backgroundColor: secondaryColor,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: shadowColor,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  continueButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
