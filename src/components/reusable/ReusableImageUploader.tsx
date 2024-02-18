import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {
  launchImageLibrary,
  ImageLibraryOptions,
  MediaType,
} from 'react-native-image-picker';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCamera} from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/reusable/ReusableImageUploader.styles';
import {uploadImage} from '../../services/apiServices';
import {getAccessTokens} from '../../utils/appUtils';

// Define the props and image type for the uploader component
type ImageType = {
  id: number | string; // Adjusted to handle temporary IDs
  localUri: string | null;
  uploaded: boolean;
  description: string | null;
};

type ReusableImageUploaderProps = {
  initialImages: Array<{
    id: number;
    image: string | null;
    description: string | null;
  }>;
  onUploadComplete: () => void;
};

const ReusableImageUploader = ({initialImages, onUploadComplete}) => {
  // Map initialImages to component's state, using 'url' as 'localUri'
  const [images, setImages] = useState(
    initialImages
      .map(img => ({
        ...img,
        localUri: img.url, // Use 'url' from initialImages as 'localUri'
        uploaded: true, // Assume initial images are already uploaded
      }))
      .concat(
        Array(6 - initialImages.length).fill({
          // Ensure there are always 6 image slots
          id: -1,
          localUri: null,
          uploaded: false,
          description: null,
        }),
      ),
  );

  const handleSelectImage = async index => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, async response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error:', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const asset = response.assets[0];
        const updatedImages = [...images];
        updatedImages[index] = {
          ...updatedImages[index],
          localUri: asset.uri,
          uploaded: false, // Mark as not uploaded yet
        };

        setImages(updatedImages);

        // Proceed with uploading the image, then mark it as uploaded
        try {
          const tokens = await getAccessTokens();
          if (tokens && tokens.accessToken) {
            const uploadResponse = await uploadImage(
              {
                uri: asset.uri,
                type: asset.type,
                name: asset.fileName || `upload_${Date.now()}`,
              },
              tokens.accessToken,
            );

            // After successful upload, mark the image as uploaded
            updatedImages[index].uploaded = true;
            setImages([...updatedImages]);
            onUploadComplete();
          }
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      }
    });
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Upload your photos</Text>
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
      </View>
    </ScrollView>
  );
};

export default ReusableImageUploader;
