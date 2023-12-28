import React from 'react';

import {View, Text, Image, TouchableOpacity} from 'react-native';
import logo from '../assets/gllogo1.png';

import {styles} from '../styles/SplashScreen.styles';

import LinearGradient from 'react-native-linear-gradient';

const SplashScreen: React.FC = () => {
  return (
    <LinearGradient colors={['#ff8c00', '#ff0080']} style={styles.background}>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>Online Dating App</Text>
      </View>
    </LinearGradient>
  );
};

export default SplashScreen;
