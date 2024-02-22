import React, {useState, useEffect, FC} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageSourcePropType,
} from 'react-native';
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
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {markImageAsInactive} from '../../services/apiServices';

interface ImageType {
  id: number;
  localUri: string | null;
  uploaded: boolean;
  description: string | null;
}

interface InitialImageType {
  id: number;
  url: string | null;
  description: string | null;
}

interface ReusableImageUploaderProps {
  initialImages: InitialImageType[];
  onUploadComplete: () => void;
}

const ReusableImageUploader: FC<ReusableImageUploaderProps> = ({
  initialImages,
  onUploadComplete,
}) => {
  const [images, setImages] = useState<ImageType[]>(
    initialImages
      .map(img => ({
        id: img.id,
        localUri: img.url,
        uploaded: img.url ? true : false,
        description: img.description,
      }))
      .concat(
        Array(6 - initialImages.length).fill({
          id: -1,
          localUri: null,
          uploaded: false,
          description: null,
        }),
      ),
  );

  const handleSelectImage = async (index: number) => {
    const options: ImageLibraryOptions = {
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
          localUri: asset.uri ?? null, // Use null as fallback if asset.uri is undefined
          uploaded: false,
        };
        setImages(updatedImages);

        try {
          const tokens = await getAccessTokens();
          if (tokens && tokens.accessToken) {
            await uploadImage(
              {
                uri: asset.uri,
                type: asset.type ?? 'image/jpeg',
                name: asset.fileName ?? `upload_${Date.now()}`,
              },
              tokens.accessToken,
            );

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

  const handleDeleteImage = async (index: number) => {
    const targetImage = images[index];

    console.error(`targetImage:`, targetImage);
    if (targetImage.id !== -1 && targetImage.uploaded) {
      const tokens = await getAccessTokens();
      if (!tokens || !tokens.accessToken) {
        console.error('Access token not available');
        return;
      }

      try {
        await markImageAsInactive(tokens.accessToken, targetImage.id);
        console.log(`Image ${targetImage.id} marked as inactive successfully.`);
      } catch (error) {
        console.error('Failed to mark image as inactive:', error);
        // Optionally handle the error, such as displaying a message to the user
        return;
      }
    }

    console.error('dddddddddd token sssss asdf');

    // Update the local UI to remove the image and replace it with a placeholder
    const updatedImages = [...images];
    updatedImages[index] = {
      id: -1,
      localUri: null,
      uploaded: false,
      description: null,
    };
    setImages(updatedImages);
  };

  // Inside the return statement, update the JSX for image rendering
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.imageGrid}>
          {images.map((image, index) => (
            <TouchableOpacity
              key={index}
              style={styles.imagePlaceholder}
              onPress={() => handleSelectImage(index)}>
              {image.localUri ? (
                <>
                  <Image source={{uri: image.localUri}} style={styles.image} />
                  <TouchableOpacity
                    style={styles.deleteIcon}
                    onPress={() => handleDeleteImage(index)}>
                    <FontAwesomeIcon icon={faTrash} size={20} color="#FF0000" />
                  </TouchableOpacity>
                </>
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
