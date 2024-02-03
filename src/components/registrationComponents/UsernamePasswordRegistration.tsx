import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {styles} from '../../styles/registrationStyles/EmailRegistration.styles.ts';
import {registerAndLogin} from '../../services/apiServices.ts';
import axios from 'axios';

// Additional imports...
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types//navigationTypes.ts';
import {ApiErrorResponse} from '../../types/apiResponses'; // Adjust import path as necessary
import {AuthResponse} from '../../types/apiResponses'; // Adjust import path as necessary

// Define the navigation prop type based on the param list
type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'UsernamePasswordRegistration'
>;

const UsernamePasswordRegistration: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [authResponse, setAuthResponse] = useState<AuthResponse | null>(null);

  // Error states...
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const route = useRoute();
  const email = route.params?.email;

  const updatePassword = (newPassword: string) => {
    setPassword(newPassword);
    // Reset the error if the user starts correcting the password
    if (confirmPassword) setPasswordError('');
  };

  const updateConfirmPassword = (newPassword: string) => {
    setConfirmPassword(newPassword);
    // Check if passwords match and update error state
    setPasswordError(
      newPassword && password !== newPassword ? 'Passwords do not match' : '',
    );
  };

  const handleNext = async () => {
    // Initialize error states to empty
    let newUsernameError = '';
    let newEmailError = '';
    let newPasswordError = '';

    // Check for validation errors
    if (!username) newUsernameError = 'Username cannot be blank.';
    if (!email) newEmailError = 'Email cannot be blank.';
    if (password !== confirmPassword)
      newPasswordError = 'Passwords do not match';

    // Update state only once, reducing the number of renders
    setUsernameError(newUsernameError);
    setEmailError(newEmailError);
    setPasswordError(newPasswordError);

    // If any errors exist, return early
    if (newUsernameError || newEmailError || newPasswordError) return;

    // Proceed with login if validation passes
    await handleLogin();
  };

  // Assume route and email extraction remains the same...
  const handleLogin = async () => {
    try {
      const response = await registerAndLogin(username, email, password);
      setAuthResponse(response); // Store the login response
      console.log('Login successful:', response);
    } catch (error) {
      console.error('Login error:', error);

      if (axios.isAxiosError(error)) {
        // Here we check if the error is an Axios error
        const serverError = error.response?.data as ApiErrorResponse;
        // Use serverError.detail for user feedback or logging
        console.error('Error detail:', serverError.detail);

        // Optionally, update the component state to display the error
        // setError(serverError.detail); // Assuming you have a state named `error` to store the error message
      } else {
        // Handle non-Axios errors
        console.error('Non-Axios error:', error);
      }
    }
  };

  useEffect(() => {
    if (authResponse) {
      navigation.navigate('BasicInfoRegistration', {
        accessToken: authResponse.access,
        refreshToken: authResponse.refresh,
      });
    }
  }, [authResponse, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backArrowContainer}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Create Account</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Almost there!</Text>
        {/* <Text style={styles.subWelcomeText}>Email: {email}</Text> */}

        {usernameError ? (
          <Text style={styles.errorText}>{usernameError}</Text>
        ) : null}
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={updatePassword}
          secureTextEntry
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        <TextInput
          style={[styles.input, passwordError ? styles.inputError : null]}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={updateConfirmPassword}
          secureTextEntry
        />
        {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null}
      </View>
      <TouchableOpacity
        style={[
          styles.button,
          !passwordError && username && password && confirmPassword
            ? null
            : styles.buttonDisabled,
        ]}
        onPress={handleNext}
        disabled={
          !!passwordError || !username || !password || !confirmPassword
        }>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UsernamePasswordRegistration;
