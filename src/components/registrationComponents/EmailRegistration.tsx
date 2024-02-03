import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/navigationTypes'; // Adjust the import path as necessary
import {styles} from '../../styles/registrationStyles/EmailRegistration.styles.ts';
import {isValidEmail} from '../../utils/Validation.ts';

// Define the navigation prop type based on the param list
type EmailRegistrationNavProp = NativeStackNavigationProp<
  RootStackParamList,
  'EmailRegistration'
>;

const EmailRegistration: React.FC = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation<EmailRegistrationNavProp>();

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
