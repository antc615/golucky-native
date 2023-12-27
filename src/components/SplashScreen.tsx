import React from 'react';

import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';

import styles from '../styles/SplashScreen.styles.ts'; // Importing styles from an external file
import logo from '../assets/gllogo1.png'; // Importing styles from an external file

const SplashScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={require(logo)}
          resizeMode="contain"
          style={styles.logo}
        />
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>Online Dating App</Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
