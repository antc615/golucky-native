import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import logo from '../assets/gllogo1.png';
import {styles} from '../styles/SplashScreen.styles';
import LinearGradient from 'react-native-linear-gradient';
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
    <LinearGradient
      colors={[
        '#FF69B4', // Light Pink
        '#FF1493', // Deep Pink
        '#C71585', // Medium Violet Red
        '#8A2BE2', // Blue Violet (Reduced presence)
        '#9370DB', // Medium Purple (Softer transition to blue)
      ]}
      style={styles.background}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.titleText}>GoLucky</Text>
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
    </LinearGradient>
  );
};

export default SplashScreen;
