import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {styles} from '../../styles/registrationStyles/EmailRegistration.styles.ts';
import {registerUser} from '../../services/apiServices.ts';
import {loginUser} from '../../services/apiServices.ts';

const UsernamePasswordRegistration: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Error states
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const navigation = useNavigation();
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

  const handleLogin = async () => {
    try {
      const loginResponse = await loginUser(username, password);
      console.log('Login successful:', loginResponse);

      // Assuming loginUser function resolves with an object that includes accessToken and refreshToken
      navigation.navigate('BasicInfoRegistration', {
        accessToken: loginResponse.accessToken,
        refreshToken: loginResponse.refreshToken,
        // Pass other user data if necessary
      });
    } catch (apiError) {
      console.error('Login error:', apiError);
      // Handle specific API errors if necessary
      if (apiError.response && apiError.response.data) {
        const errors = apiError.response.data;
        // Update state with API errors if needed
      }
    }
  };

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
