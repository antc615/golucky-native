import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Adjust the import path as necessary for styles
import { styles } from '../../styles/registrationStyles/PhoneNumberRegistration.styles.ts';

const PhoneNumberRegistration: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [disclaimerVisible, setDisclaimerVisible] = useState(true);

  const navigation = useNavigation();

  const handleNext = () => {
    // Proceed with the next steps
    console.log('Navigating to the next screen');
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backArrowContainer}
            onPress={() => navigation.goBack()}>
            <Text style={styles.backArrow}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Phone Number</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.message}>What's your phone number?</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />

          {disclaimerVisible && (
            <Text style={styles.disclaimer}>
              GoLucky will send you a text with a verification code. Message and data rates may apply.
            </Text>
          )}
        </View>

        <TouchableOpacity
          style={[
            styles.button,
            !phoneNumber && styles.buttonDisabled,
          ]}
          onPress={handleNext}
          disabled={!phoneNumber}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PhoneNumberRegistration;