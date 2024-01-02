// HeaderComponent.tsx
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import logoStandaloneBlack from '../assets/logo-standalone-black.png';

const HeaderComponent = ({showIcons = true}) => {
  return (
    <View style={[styles.headerContainer, !showIcons && styles.centerContent]}>
      <View style={styles.logoContainer}>
        <Image source={logoStandaloneBlack} style={styles.logo} />
        <Text style={styles.logoText}>golucky</Text>
      </View>
      {showIcons && (
        <View style={styles.iconsContainer}>
          <FontAwesomeIcon icon="bars" style={styles.icon} />
          <FontAwesomeIcon icon="bell" style={styles.icon} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF',
    borderBottomWidth: 0.25,
    borderBottomColor: '#dcdcdc',
  },
  centerContent: {
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  logoText: {
    marginLeft: 5,
    fontSize: 18,
    fontWeight: 'bold',
    // Add any additional styling for the text
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 10,
    // Add any additional styling for the icons
  },
  // ... other styles
});

export default HeaderComponent;
