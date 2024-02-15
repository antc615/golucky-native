// ReusableImageUploader.js
import React, {useState} from 'react';
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

// Add a prop for initial images
type ReusableImageUploaderProps = {
  onUploadComplete: () => void;
  initialImages?: Array<{
    id: number;
    image: string | null;
    description: string | null;
  }>;
};

const ReusableImageUploader: React.FC<ReusableImageUploaderProps> = ({
  onUploadComplete,
  initialImages = [],
}) => {
  const [images, setImages] = useState(
    () =>
      initialImages
        .map(img => ({
          ...img,
          localUri: img.image,
          uploaded: !!img.image, // Mark as uploaded if there's an image URL
        }))
        .concat(
          Array(6 - initialImages.length).fill({
            localUri: null,
            uploaded: false,
          }),
        ), // Fill the rest with placeholders
  );

  const handleSelectImage = async (index: number) => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo' as MediaType, // Correctly typed as MediaType
      quality: 1,
    };
    launchImageLibrary(options, async response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets[0]) {
        const asset = response.assets[0];
        const newImage = {
          // Assuming your backend expects an id for new images, you might need to handle this differently
          id: asset.fileName || `temp_${Date.now()}`, // Temporary ID for new images
          localUri: asset.uri,
          uploaded: false,
          description: '', // Add any default or selected description for new images
          is_profile_picture: false, // Set based on your logic or user selection
        };

        // Update images state to show the new/updated image immediately in the UI
        setImages(prevImages => {
          // If replacing an existing image, update it; otherwise, add as a new image
          const updatedImages = [...prevImages];
          updatedImages[index] = newImage;
          return updatedImages;
        });

        // Upload the image
        try {
          const tokens = await getAccessTokens();
          if (tokens && tokens.accessToken) {
            const uploadResponse = await uploadImage(
              {
                uri: asset.uri,
                type: asset.type || 'image/jpeg', // Default to JPEG if type is not available
                name: asset.fileName || `upload_${Date.now()}.jpg`, // Ensure a filename is always provided
              },
              tokens.accessToken,
            );

            // Handle the response from the image upload
            // For example, if your backend returns the final image URL or ID, update the state accordingly
            console.log('Upload response:', uploadResponse);

            // Mark the image as uploaded in the state
            setImages(prevImages =>
              prevImages.map((img, idx) =>
                idx === index ? {...img, uploaded: true} : img,
              ),
            );

            onUploadComplete(); // Notify parent component or perform additional actions
          }
        } catch (error) {
          console.error('Error uploading image:', error);
          // Optionally handle image upload errors (e.g., show an error message)
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
