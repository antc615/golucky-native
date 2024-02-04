import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../styles/registrationStyles/ImageRegistration.styles'; // Import the external stylesheet

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCamera} from '@fortawesome/free-solid-svg-icons';

// Navigation
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/navigationTypes';

type ImageRegistrationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ImageRegistration'
>;

const ImageUploadComponent = () => {
  const navigation = useNavigation<ImageRegistrationProp>();

  const handleNext = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'MainApp'}],
    });
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backArrowContainer}
            onPress={() => navigation.goBack()}>
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Upload Selfies</Text>
        </View>

        <Text style={styles.title}>
          Upload selfies of yourself to train your model
        </Text>

        <View style={styles.imageGrid}>
          {[...Array(6)].map((_, index) => (
            <View key={index} style={styles.imagePlaceholder}>
              <FontAwesomeIcon icon={faCamera} size={24} color="#000" />
            </View>
          ))}
        </View>

        <Text style={styles.subText}>Tap to edit, drag to reorder</Text>
        <Text style={styles.subText}>6 required</Text>

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ImageUploadComponent;
