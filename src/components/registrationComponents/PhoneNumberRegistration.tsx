import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../../styles/registrationStyles/PhoneNumberRegistration.styles.ts';
import {Picker} from '@react-native-picker/picker';

// Access tokens and Utils
import {getAccessTokens} from '../../utils/appUtils.ts';
import {updatePhoneNumber} from '../../services/apiServices.ts';

// Navigation
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/navigationTypes';

type PhoneNumberRegistrationNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'PhoneNumberRegistration'
>;

const PhoneNumberRegistration = () => {
  const [countryCode, setCountryCode] = useState('+1'); // Default to +1 for example
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [isUpdateSuccess, setIsUpdateSuccess] = useState(false);

  const navigation = useNavigation<PhoneNumberRegistrationNavigationProp>();

  const validatePhoneNumber = () => {
    // Simple validation check (adjust according to your needs)
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleNext = async () => {
    if (validatePhoneNumber()) {
      try {
        const tokens = await getAccessTokens(); // Ensure this function is correctly implemented to fetch tokens
        if (tokens && tokens.accessToken) {
          const formData = {phone_number: phoneNumber};
          await updatePhoneNumber(tokens.accessToken, formData);
          setIsUpdateSuccess(true); // Indicate successful profile update
          setPhoneNumberError('');
        } else {
          console.error('Access token not found');
        }
      } catch (error) {
        console.error('Error in handleNext:', error);
        setIsUpdateSuccess(false); // Optionally handle failure
      }
    }
  };

  useEffect(() => {
    if (isUpdateSuccess) {
      // Reset the navigation stack and navigate to the MainApp
      navigation.reset({
        index: 0,
        routes: [{name: 'MainApp'}],
      });
      setIsUpdateSuccess(false); // Reset the state if needed
    }
  }, [isUpdateSuccess, navigation]);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backArrowContainer}
            onPress={() => navigation.goBack()}>
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Phone Number</Text>
        </View>

        <View style={styles.formGroup}>
          <Picker
            selectedValue={countryCode}
            onValueChange={itemValue => setCountryCode(itemValue)}
            style={styles.picker}
            mode="dropdown">
            <Picker.Item label="US (+1)" value="+1" />
            <Picker.Item label="UK (+44)" value="+44" />
            <Picker.Item label="IDA (+91)" value="+91" />
          </Picker>

          <TextInput
            style={[styles.input, phoneNumberError ? styles.inputError : {}]}
            placeholder="1234567890"
            keyboardType="number-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        {phoneNumberError && (
          <Text style={styles.errorText}>{phoneNumberError}</Text>
        )}

        <TouchableOpacity
          style={[styles.button, phoneNumber ? {} : styles.buttonDisabled]}
          onPress={handleNext}
          disabled={!phoneNumber}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PhoneNumberRegistration;
