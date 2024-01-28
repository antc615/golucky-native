import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {styles} from '../styles/SplashScreen.styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import logobg from '../assets/logobg-blue.jpg';
import logo from '../assets/logo3.png';

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
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.disclaimer}>
          By tapping 'Sign in' you agree to our Terms. Learn how we process your
          data in our Privacy Policy
        </Text>
        <TouchableOpacity style={styles.button} onPress={navigateToMainApp}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>Trouble signing in?</Text>
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;
