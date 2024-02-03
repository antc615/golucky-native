import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';

// Adjust the import path as necessary for styles and types
import {styles} from '../../styles/registrationStyles/BasicInfoRegistration.styles';
import {RootStackParamList} from '../../types/navigationTypes';

type BasicInfoRegistrationRouteProp = RouteProp<
  RootStackParamList,
  'BasicInfoRegistration'
>;

const BasicInfoRegistration: React.FC = () => {
  const route = useRoute<BasicInfoRegistrationRouteProp>();
  const {accessToken, refreshToken} = route.params;

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

  useEffect(() => {
    // Initially, no fields are in error state
    setErrors({
      firstName: '',
      lastName: '',
      location: '',
      occupation: '',
    });
  }, []);

  const validateFields = () => {
    let isValid = true;
    let newErrors = {...errors};

    if (!firstName.trim()) {
      newErrors.firstName = 'First Name is required';
      isValid = false;
    }

    if (!lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
      isValid = false;
    }

    if (!location.trim()) {
      newErrors.location = 'Location is required';
      isValid = false;
    }

    if (!occupation.trim()) {
      newErrors.occupation = 'Occupation is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateFields()) {
      console.log('Navigating to the next screen');
      // Add navigation logic here
    }
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
          <Text style={styles.headerText}>Basic Info</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={[styles.input, errors.firstName ? styles.inputError : {}]}
            placeholder="John"
            value={firstName}
            onChangeText={setFirstName}
          />
          {errors.firstName && (
            <Text style={styles.errorText}>{errors.firstName}</Text>
          )}

          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={[styles.input, errors.lastName ? styles.inputError : {}]}
            placeholder="Doe"
            value={lastName}
            onChangeText={setLastName}
          />
          {errors.lastName && (
            <Text style={styles.errorText}>{errors.lastName}</Text>
          )}

          <Text style={styles.label}>Location</Text>
          <TextInput
            style={[styles.input, errors.location ? styles.inputError : {}]}
            placeholder="New York, USA"
            value={location}
            onChangeText={setLocation}
          />
          {errors.location && (
            <Text style={styles.errorText}>{errors.location}</Text>
          )}

          <Text style={styles.label}>Occupation</Text>
          <TextInput
            style={[styles.input, errors.occupation ? styles.inputError : {}]}
            placeholder="Software Developer"
            value={occupation}
            onChangeText={setOccupation}
          />
          {errors.occupation && (
            <Text style={styles.errorText}>{errors.occupation}</Text>
          )}
        </View>

        <TouchableOpacity
          style={[
            styles.button,
            Object.values(errors).some(error => error)
              ? styles.buttonDisabled
              : {},
          ]}
          onPress={handleNext}
          disabled={Object.values(errors).some(error => error)}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BasicInfoRegistration;
