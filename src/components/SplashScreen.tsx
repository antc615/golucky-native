import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import logobg from '../assets/logobg-pink.jpg';
import {styles} from '../styles/SplashScreen.styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  SplashScreen: undefined;
  MainApp: undefined; // Added MainApp
  // ... other routes
};

type SplashScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SplashScreen'
>;

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  const navigateToMainApp = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'MainApp'}],
    });
  };

  return (
    <ImageBackground source={logobg} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Text style={styles.disclaimer}>
            By tapping 'Sign in' you agree to our Terms. Learn how we process
            your data in our Cookies and Privacy Policy
          </Text>
          <TouchableOpacity style={styles.button} onPress={navigateToMainApp}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={navigateToMainApp}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.footerText}>Trouble signing in?</Text>
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;
