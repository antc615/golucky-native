import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {isValidEmail} from '../../utils/Validation.ts'; // Assume a utility function for email validation
import {styles} from '../../styles/registrationStyles/EmailRegistration.styles.ts';

const EmailRegistration: React.FC = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const isValidEmail = (email: string) => {
    // Simple regex for validating an email
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backArrowContainer}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>About You</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.subWelcomeText}>Who are you?</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoFocus={true}
        />
      </View>
      <TouchableOpacity
        style={[styles.button, !isValidEmail(email) && styles.buttonDisabled]}
        onPress={() =>
          navigation.navigate('UsernamePasswordRegistration', {email})
        }
        disabled={!isValidEmail(email)}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmailRegistration;
