import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {styles} from '../../styles/registrationStyles/EmailRegistration.styles.ts';

import {RootStackParamList} from '../../types/navigationTypes'; // Adjust the import path as necessary
type BasicInfoRegistrationRouteProp = RouteProp<
  RootStackParamList,
  'BasicInfoRegistration'
>;

const BasicInfoRegistration: React.FC = () => {
  const route = useRoute<BasicInfoRegistrationRouteProp>();
  const {accessToken, refreshToken} = route.params; // Destructure the needed parameters

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [location, setLocation] = useState('');
  const [occupation, setOccupation] = useState('');
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    location: '',
    occupation: '',
  });

  const navigation = useNavigation();

  const validateFields = () => {
    let newErrors = {firstName: '', lastName: '', location: '', occupation: ''};
    let isValid = true;

    if (!firstName) {
      newErrors.firstName = 'First Name is required';
      isValid = false;
    }
    if (!lastName) {
      newErrors.lastName = 'Last Name is required';
      isValid = false;
    }
    if (!location) {
      newErrors.location = 'Location is required';
      isValid = false;
    }
    if (!occupation) {
      newErrors.occupation = 'Occupation is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateFields()) {
      // Proceed with the next steps
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
        <Text style={styles.headerText}>Basic Info</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.welcomeText}>
          Thanks for creating your account!
        </Text>
        <Text style={styles.subWelcomeText}>Now tell us about you</Text>

        {/* First Name */}
        <TextInput
          style={[styles.input, errors.firstName ? styles.inputError : {}]}
          placeholder="Enter your First Name"
          value={firstName}
          onChangeText={text => {
            setFirstName(text);
            setErrors(prev => ({...prev, firstName: ''}));
          }}
        />
        {errors.firstName ? (
          <Text style={styles.errorText}>{errors.firstName}</Text>
        ) : null}

        {/* Last Name Input */}
        <TextInput
          style={[styles.input, errors.lastName ? styles.inputError : {}]}
          placeholder="Enter your Last Name"
          value={lastName}
          onChangeText={text => {
            setLastName(text);
            setErrors(prev => ({...prev, lastName: ''}));
          }}
        />
        {errors.lastName ? (
          <Text style={styles.errorText}>{errors.lastName}</Text>
        ) : null}

        {/* Location Input */}
        {/* Assuming you want a simple text input for the location; for a picker, you'd use a different component */}
        <TextInput
          style={[styles.input, errors.location ? styles.inputError : {}]}
          placeholder="Where do you live?"
          value={location}
          onChangeText={text => {
            setLocation(text);
            setErrors(prev => ({...prev, location: ''}));
          }}
        />
        {errors.location ? (
          <Text style={styles.errorText}>{errors.location}</Text>
        ) : null}

        {/* Occupation Input */}
        <TextInput
          style={[styles.input, errors.occupation ? styles.inputError : {}]}
          placeholder="What do you do for work?"
          value={occupation}
          onChangeText={text => {
            setOccupation(text);
            setErrors(prev => ({...prev, occupation: ''}));
          }}
        />
        {errors.occupation ? (
          <Text style={styles.errorText}>{errors.occupation}</Text>
        ) : null}
      </View>
      <TouchableOpacity
        style={[styles.button, !validateFields() && styles.buttonDisabled]}
        onPress={handleNext}
        disabled={!validateFields()}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasicInfoRegistration;
