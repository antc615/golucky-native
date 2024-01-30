// HeaderComponent.tsx
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import logoStandaloneBlack from '../assets/logo-custom-blue.png';

const HeaderComponent = ({icons = []}) => {
  const iconCount = icons.length;

  let containerStyle = styles.headerContainer;
  if (iconCount === 0) {
    containerStyle = [styles.headerContainer, styles.headerContainerCentered];
  } else if (iconCount === 1) {
    containerStyle = [styles.headerContainer, styles.headerContainerCentered];
  } else {
    containerStyle = [styles.headerContainer, styles.headerContainerSpaced];
  }

  return (
    <View style={containerStyle}>
      {(iconCount === 0 || iconCount === 1) && <View style={{flex: 1}} />}
      <View style={styles.logoContainer}>
        <Image source={logoStandaloneBlack} style={styles.logo} />
        <Text style={styles.logoText}>goLucky</Text>
      </View>
      {(iconCount === 0 || iconCount === 1) && <View style={{flex: 1}} />}
      {iconCount > 0 && (
        <View style={styles.iconsContainer}>
          {icons.map((icon, index) => (
            <FontAwesomeIcon key={index} icon={icon} style={styles.icon} />
          ))}
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
  headerContainerCentered: {
    justifyContent: 'center',
  },
  headerContainerSpaced: {
    justifyContent: 'space-between',
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
    color: 'rgb(52, 103, 164)',
    // Add any additional styling for the text
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Align icons to the right
  },
  icon: {
    marginLeft: 10,
    // Add any additional styling for the icons
  },
  // ... other styles
});

export default HeaderComponent;
