import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../styles/registrationStyles/ImageRegistration.styles';

// Image selector
import {
  launchImageLibrary,
  ImageLibraryOptions,
} from 'react-native-image-picker';

import uuid from 'react-native-uuid';
// Assuming FontAwesomeIcon and other imports are correctly set up
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCamera} from '@fortawesome/free-solid-svg-icons';

// Assuming RootStackParamList is correctly defined
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/navigationTypes';
import {uploadImage} from '../../services/apiServices.ts';
import {getAccessTokens} from '../../utils/appUtils.ts';

type ImageRegistrationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ImageRegistration'
>;

const ImageUploadComponent: React.FC = () => {
  const navigation = useNavigation<ImageRegistrationProp>();
  const [images, setImages] = useState<string[]>([]);

  const totalPlaceholders = 6; // Total placeholders for the 3x2 grid

  const handleSelectImage = async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, async response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const asset = response.assets[0];
        if (asset.uri) {
          try {
            // Retrieve the access token
            const tokens = await getAccessTokens();
            if (tokens && tokens.accessToken) {
              // Upload the image immediately after selection
              const uploadResult = await uploadImage(
                {
                  uri: asset.uri,
                  type: asset.type,
                  name: asset.fileName || `upload_${new Date().getTime()}`,
                },
                tokens.accessToken,
              );

              // Check the response from your backend to get the URL of the uploaded image
              // Assuming the backend responds with the URL in uploadResult.image
              if (uploadResult && uploadResult.image) {
                // Update the UI to display the uploaded image
                setImages(prevImages => [
                  ...prevImages,
                  {localUri: uploadResult.image, uploaded: true},
                ]);
              }
            } else {
              console.error('Access token not found');
            }
          } catch (error) {
            console.error('Error uploading image:', error);
          }
        }
      }
    });
  };

  const handleNext = async () => {
    const tokens = await getAccessTokens(); // Ensure this function is correctly implemented to fetch tokens
    if (tokens && tokens.accessToken) {
      // Implement the logic to upload images or navigate
      const uploadPromises = images.map(imageUri =>
        uploadImage(imageUri, tokens.accessToken),
      );
      try {
        const responses = await Promise.all(
          uploadPromises.map(p => p.catch(e => e)),
        );
        // Filter out errors if needed, or handle them individually
        responses.forEach(response => {
          if (response instanceof Error) {
            console.error('Error uploading an image:', response);
          } else {
            console.log('Image uploaded:', response);
          }
        });
      } catch (error) {
        console.error('An unexpected error occurred:', error);
      }
    } else {
      console.error('Access token not found');
    }
  };

  // navigation.reset({
  //   index: 0,
  //   routes: [{name: 'MainApp'}],
  // });
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
          {images.map((image, index) => (
            <View key={index} style={styles.imagePlaceholder}>
              <Image source={{uri: image.localUri}} style={styles.image} />
            </View>
          ))}
          {images.length < totalPlaceholders && (
            <TouchableOpacity
              style={styles.imagePlaceholder}
              onPress={handleSelectImage}>
              <FontAwesomeIcon icon={faCamera} size={24} color="#000" />
            </TouchableOpacity>
          )}
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
