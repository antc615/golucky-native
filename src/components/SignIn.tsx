// SignIn.tsx
import React, {useState,} from 'react';
import {View, Text, TextInput, TouchableOpacity,} from 'react-native';
import {styles} from '../styles/SignIn.styles.ts';
import {useNavigation} from '@react-navigation/native';
import {authenticateUser} from '../services/apiServices.ts';
import {ActivityIndicator} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Navigation requirements
  type RootStackParamList = {
    SplashScreen: undefined;
    SignIn: undefined;
    MainApp: undefined;
    // ... other routes
  };

  type SignInNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'SignIn'
  >;
  const navigation = useNavigation<SignInNavigationProp>();

  const storeTokens = async (
    access: string,
    refresh: string,
  ): Promise<void> => {
    try {
      await AsyncStorage.setItem('accessToken', access);
      await AsyncStorage.setItem('refreshToken', refresh);
    } catch (e) {
      console.error('Storing tokens error', e);
    }
  };

  const validateForm = () => {
    let isValid = true;
    // Simple email validation
    if (!email || !email.includes('@')) {
      setEmailError('Invalid email address');
      isValid = false;
    } else {
      setEmailError('');
    }
    // Password validation: for demonstration, simply checks if password is not empty
    if (!password) {
      setPasswordError('Password cannot be empty');
      isValid = false;
    } else {
      setPasswordError('');
    }
    return isValid;
  };

  const handleSignIn = async () => {
    setIsLoading(true);

    // Reset error states
    setEmailError('');
    setPasswordError('');
    setError('');
    setIsLoading(true);

    if (!validateForm()) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await authenticateUser(email, password);

      // Handle successful login: Store tokens, navigate
      await storeTokens(response.access, response.refresh);
      console.log('Login successful:', response);
      setIsLoading(false);

      // Reset the navigation stack and navigate to the MainApp
      navigation.reset({
        index: 0,
        routes: [{name: 'MainApp'}],
      });
    } catch (apiError) {
      console.error('Login error:', apiError);
      setError('Login failed. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {!!emailError && <Text style={styles.errorText}>{emailError}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {isLoading && (
        <ActivityIndicator animating={true} color="#007bff" /> // Use your theme color
      )}
      {!!passwordError && <Text style={styles.errorText}>{passwordError}</Text>}
      <TouchableOpacity
        style={styles.button}
        onPress={handleSignIn}
        disabled={isLoading}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

export default SignIn;
