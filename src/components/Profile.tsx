// Profile.tsx
import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {styles} from '../styles/Profile.styles'; // Define your styles

const Profile: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imagesContainer}>
        {[...Array(9)].map((_, index) => (
          <TouchableOpacity key={index} style={styles.imagePlaceholder}>
            <FontAwesomeIcon icon="camera" size={20} color="#000" />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <TextInput
          style={styles.input}
          placeholder="Describe yourself"
          multiline
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <TextInput style={styles.input} placeholder="Location" />
        <TextInput style={styles.input} placeholder="Birthday" />
        {/* Add more fields as needed */}
      </View>
    </ScrollView>
  );
};

export default Profile;
