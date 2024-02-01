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
    if (
      username.length === 0 ||
      password.length === 0 ||
      password !== confirmPassword
    ) {
      // Set error messages if fields are invalid
      setUsernameError(
        username.length === 0 ? 'Username cannot be blank.' : '',
      );
      setEmailError(email.length === 0 ? 'Email cannot be blank.' : '');
      setPasswordError(
        password !== confirmPassword ? 'Passwords do not match' : '',
      );
      return;
    }

    try {
      const registrationResponse = await registerUser(
        username,
        email,
        password,
      );
      console.log('Registration successful:', registrationResponse);

      // TODO: Navigate to next component and pass the user credentials
      // navigation.navigate('NextComponent', { userData: registrationResponse });
    } catch (apiError) {
      console.error('Registration error:', apiError);
      if (apiError.response && apiError.response.data) {
        const errors = apiError.response.data;
        setUsernameError(errors.username ? errors.username[0] : '');
        setEmailError(errors.email ? errors.email[0] : '');
        // Assuming similar error handling for password
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
