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

const UsernamePasswordRegistration: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigation = useNavigation();
  const route = useRoute();
  const email = route.params?.email;

  const handleNext = () => {
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }
    setPasswordError('');
    // Proceed if username and passwords are valid
    if (username.length > 0 && password.length > 0) {
      // Logic to go to next screen
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
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={[styles.input, passwordError ? styles.inputError : null]}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
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
