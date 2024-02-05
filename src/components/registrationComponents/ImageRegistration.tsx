import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../styles/registrationStyles/ImageRegistration.styles';

// Image selector
import {
  launchImageLibrary,
  ImageLibraryOptions,
  MediaType,
} from 'react-native-image-picker';

import uuid from 'react-native-uuid';

// Assuming FontAwesomeIcon and other imports are correctly set up
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCamera} from '@fortawesome/free-solid-svg-icons';

// Assuming RootStackParamList is correctly defined
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/navigationTypes';

type ImageRegistrationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ImageRegistration'
>;

const ImageUploadComponent: React.FC = () => {
  const navigation = useNavigation<ImageRegistrationProp>();
  const [images, setImages] = useState([]);

  const totalPlaceholders = 6; // Total placeholders for the 3x2 grid

  const handleSelectImage = () => {
    // Specify options with correct types
    const options: ImageLibraryOptions = {
      mediaType: 'photo', // Use 'photo' as string literal
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        // Ensure assets exist and have at least one item
        const asset = response.assets[0]; // Extract the first asset
        if (asset.uri) {
          // Make sure the asset has a URI
          const fileExtension = asset.uri.substring(asset.uri.lastIndexOf('.')); // Extract the file extension
          const newImageUri = `http://localhost:9001/${uuid.v4()}${fileExtension}`;
          setImages(prevImages => [...prevImages, newImageUri]);
          // Proceed to upload the image or handle it as needed
        }
      }
    });
  };

  const handleNext = () => {
    // Implement the logic to upload images or navigate
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
          {Array.from({length: totalPlaceholders}).map((_, index) => (
            <TouchableOpacity
              key={index}
              style={styles.imagePlaceholder}
              onPress={handleSelectImage}>
              {index < images.length ? (
                <Image source={{uri: images[index]}} style={styles.image} />
              ) : (
                <FontAwesomeIcon icon={faCamera} size={24} color="#000" />
              )}
            </TouchableOpacity>
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
