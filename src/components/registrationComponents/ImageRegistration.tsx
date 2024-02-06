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
  const initialPlaceholders = Array(6).fill({localUri: null, uploaded: false});

  const [images, setImages] = useState(initialPlaceholders);

  const handleSelectImage = async index => {
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
          // Update the state with the local URI to display the image immediately
          setImages(prevImages =>
            prevImages.map((img, idx) =>
              idx === index
                ? {...img, localUri: asset.uri, uploaded: false}
                : img,
            ),
          );

          try {
            // Retrieve the access token
            const tokens = await getAccessTokens();
            if (tokens && tokens.accessToken) {
              // Continue to upload the image to the backend
              await uploadImage(
                {
                  uri: asset.uri,
                  type: asset.type,
                  name: asset.fileName || `upload_${new Date().getTime()}`,
                },
                tokens.accessToken,
              );

              // Optionally update the state to mark the image as uploaded
              // if you need to track upload status in the UI
            } else {
              console.error('Access token not found');
            }
          } catch (error) {
            console.error('Error uploading image:', error);
            // Optionally handle failed upload state here
          }
        }
      }
    });
  };

  const handleNext = async () => {
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
          {images.map((image, index) => (
            <TouchableOpacity
              key={index}
              style={styles.imagePlaceholder}
              onPress={() => handleSelectImage(index)}>
              {image.localUri ? (
                <Image source={{uri: image.localUri}} style={styles.image} />
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
