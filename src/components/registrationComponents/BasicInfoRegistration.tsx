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
import {getAccessTokens} from '../../utils/appUtils.ts';
import {updateUserProfile} from '../../services/apiServices.ts';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// Define the navigation prop type
type BasicInfoNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'BasicInfoRegistration'
>;

const BasicInfoRegistration: React.FC = () => {
  const navigation = useNavigation<BasicInfoNavigationProp>();
  const [isUpdateSuccess, setIsUpdateSuccess] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [location, setLocation] = useState('');
  const [occupation, setOccupation] = useState('');
  const [age, setAge] = useState('');
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    location: '',
    occupation: '',
    age: '',
  });

  useEffect(() => {
    // Initially, no fields are in error state
    setErrors({
      firstName: '',
      lastName: '',
      location: '',
      occupation: '',
      age: '',
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

    if (!age.trim()) {
      newErrors.occupation = 'Age is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = async () => {
    if (validateFields()) {
      try {
        const tokens = await getAccessTokens(); // Ensure this function is correctly implemented to fetch tokens
        if (tokens && tokens.accessToken) {
          const formData = {firstName, lastName, location, occupation, age};
          await updateUserProfile(tokens.accessToken, formData);
          setIsUpdateSuccess(true); // Indicate successful profile update
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
      // Navigate to PhoneNumberRegistration after successful profile update
      navigation.navigate('PhoneNumberRegistration');
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
            <Text style={styles.backArrow}> ← </Text>
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

          <Text style={styles.label}>Age</Text>
          <TextInput
            style={[styles.input, errors.age ? styles.inputError : {}]}
            placeholder="25"
            value={age}
            onChangeText={setAge}
          />
          {errors.age && <Text style={styles.errorText}>{errors.age}</Text>}

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
